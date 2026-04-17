#!/usr/bin/env node

import { execSync } from 'child_process';
import readline from 'readline';

const URL = 'https://whatthecommit.com/index.txt';

async function fetchCommitMessage() {
  try {
    const response = await fetch(URL, {
      signal: AbortSignal.timeout(3000)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const content = (await response.text()).trim();

    // Check ASCII
    if (!/^[\x00-\x7F]*$/.test(content)) {
      throw new Error('Content is not pure ASCII');
    }

    // Check for forbidden characters
    const forbidden = ['$', '`', '\\'];
    if (forbidden.some(c => content.includes(c))) {
      throw new Error('Content contains forbidden characters');
    }

    // Check for control characters (except tab, newline, carriage return)
    if (/[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(content)) {
      throw new Error('Content contains control characters');
    }

    return content;
  } catch (error) {
    console.error(`Error fetching commit message: ${error.message}`);
    return 'Up';
  }
}

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question(query, answer => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  try {
    execSync('git add .', { stdio: 'inherit' });

    // Get commit message
    let commitMessage;
    while (true) {
      commitMessage = await fetchCommitMessage();
      console.log(`\nCommit message: ${commitMessage}`);

      const answer = await askQuestion('Do you like this one? (y/n/q to enter custom) ');
      const choice = answer.toLowerCase().trim();

      if (choice.startsWith('y')) {
        break;
      } else if (choice.startsWith('q')) {
        // Allow user to enter custom commit message
        while (true) {
          commitMessage = await askQuestion('Enter your custom commit message: ');
          if (commitMessage.trim()) {
            break;
          }
          console.log('Commit message cannot be empty.');
        }
        break;
      }
      // If 'n' or anything else, continue to get a new random message
    }

    // Commit
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

    // Push
    execSync('git push', { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main();
