
//import { Worker, isMainThread, threadId } from 'worker_threads1'
// const { isMainThread } = require('node:worker_threads');
// const { Worker } = require('node:worker_threads');
// const { threadId } = require('node:worker_threads');

if (isMainThread) {
  // This loads the current file inside a Worker instance.
  console.log('inside main thread')
  new Worker('./app_workerThread.js')
} else {
  console.log('inside worker', threadId)
}