<template>
    <div class="console">
      <input type="text" v-model="command" placeholder="Entrez une commande" class="command-input">
      <button @click="executeCommand" class="execute-button">Exécuter</button>
      <div class="output command-output" v-html="commandOutput"></div>
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        command: '',
        commandOutput: ''
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
            console.error('Erreur lors de la requête :', error);
          });
      }
    }
  };
</script>
  
<style>
  .console {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 5px;
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
</style>  