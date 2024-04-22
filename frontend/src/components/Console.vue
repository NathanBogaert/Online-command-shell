<template>
  <div class="console">
    <input type="text" v-model="command" placeholder="Enter a command" class="command-input">
    <button @click="executeCommand" class="execute-button">Execute</button>
    <div class="output command-output" v-html="commandOutput"></div>
    <div class="notification" :class="{ 'show-notification': showNotification }">{{ notificationMessage }}</div>
  </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        command: '',
        commandOutput: '',
        showNotification: false,
        notificationMessage: ''
      };
    },
    methods: {
      executeCommand() {
        axios.post('http://localhost:3000/command', { command: this.command })
          .then(response => {
            const outputLines = response.data.split('\n');
            this.commandOutput = outputLines.join('<br>');
          })
          .catch(error => {
            console.error('Error executing command:', error);
            this.showNotification = true;
            this.notificationMessage = 'Command not found'
            setTimeout(() => {
              this.showNotification = false;
            }, 2000);
          });
      }
    }
  };
</script>
  
<style>
  .console {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .command-input {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .execute-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
  }
  
  .execute-button:hover {
    background-color: #0056b3;
  }
  
  .output {
    margin-top: 10px;
    padding: 10px;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .command-output {
    color: black;
  }

  .notification {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  margin-top: 1rem;
  background-color: red;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
}

.show-notification {
  opacity: 1;
  visibility: visible;
}
</style>  