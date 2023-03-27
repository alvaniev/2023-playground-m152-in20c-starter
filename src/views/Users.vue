<!-- <template>
  <v-container fluid>
    <v-snackbar v-model="alert" top :color="alertcolor">
      <div class="d-flex justify-space-between align-center">
        {{ alertmsg }}
        <v-btn dark text @click="close" right>Close</v-btn>
      </div>
    </v-snackbar>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Benutzer
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Suche"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="users" :search="search"></v-data-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn @click="getUsers" color="primary">Benutzer laden</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template> -->

<template>
  <v-card>
    <v-card-item><v-card-title>foo</v-card-title></v-card-item>
    <v-card-text>{{ msg }}</v-card-text>
  </v-card>
</template>

<script>

import { ref } from "vue";

export default {
  setup() {
    const msg = ref("Hello World");

    return {msg};
  },

  // data() {
  //   return {
  //     alert: false,
  //     alertmsg: "",
  //     alertcolor: "",
  //     search: "",
  //     headers: [
  //       {
  //         text: "ID",
  //         align: "start",
  //         sortable: true,
  //         value: "id"
  //       },
  //       {
  //         text: "Name",
  //         align: "start",
  //         sortable: true,
  //         value: "name"
  //       },
  //       {
  //         text: "E-Mail",
  //         align: "start",
  //         sortable: true,
  //         value: "email"
  //       },
  //       {
  //         text: "PLZ",
  //         align: "start",
  //         sortable: true,
  //         value: "address.zipcode"
  //       },
  //       {
  //         text: "Stadt",
  //         align: "start",
  //         sortable: true,
  //         value: "address.city"
  //       }
  //     ],
  //     users: []
  //   };
  // },
  methods: {
    async getUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        this.users = await res.json();
        if (!res.ok) {
          throw new Error(`Fehler: ${res.statusText} - (HTTP-Status: ${res.status})`);
        }

        // display snackbar with success message
        this.alertmsg = `Benutzer geladen - (HTTP-Status ${res.status})`;
        this.alertcolor = "success";
        this.alert = true;
      } catch (err) {
        // display snackbar with error message
        this.alertmsg = err.message;
        this.alertcolor = "error";
        this.alert = true;
      }
    },
    close() {
      this.alert = false;
    }
  }
};
</script>

<style></style>
