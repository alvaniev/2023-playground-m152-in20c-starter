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
          <v-data-table
            v-model:items-per-page="itemsPerPage"
            :headers="headers"
            :items="users"
            item-value="id"
          ></v-data-table>
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
  <v-container fluid>
    <v-snackbar v-model="alert" top :color="alertcolor">
      <div class="d-flex justify-space-between align-center">
        {{ alertmsg }}
        <v-btn variant="text" @click="close" right>Close</v-btn>
      </div>
    </v-snackbar>
    <v-row>
      <v-col cols="12">
        <v-table>
          <thead>
            <tr>
              <th v-for="header in headers" :key="header.key">
                {{ header.title }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.address.zipcode }}</td>
              <td>{{ user.address.city }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn @click="getUsers">Benutzer laden</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const msg = ref("Hello World");
    const headers = ref([
      {
        title: "ID",
        align: "start",
        sortable: true,
        key: "id",
      },
      {
        title: "Name",
        align: "start",
        sortable: true,
        key: "name",
      },
      {
        title: "E-Mail",
        align: "start",
        sortable: true,
        key: "email",
      },
      {
        title: "PLZ",
        align: "start",
        sortable: true,
        key: "address.zipcode",
      },
      {
        title: "Stadt",
        align: "start",
        sortable: true,
        key: "address.city",
      },
    ]);
    const users = ref([]);
    const alert = ref(false);
    const alertmsg = ref("");
    const alertcolor = ref("");
    const search = ref("");
    const itemsPerPage = ref(10);

    async function getUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        users.value = await res.json();
        if (!res.ok) {
          throw new Error(
            `Fehler: ${res.statusText} - (HTTP-Status: ${res.status})`
          );
        }

        // display snackbar with success message
        alertmsg.value = `Benutzer geladen - (HTTP-Status ${res.status})`;
        alertcolor.value = "success";
        alert.value = true;
      } catch (err) {
        // display snackbar with error message
        alertmsg.value = err.message;
        alertcolor.value = "error";
        alert.value = true;
      }
    }
    function close() {
      alert.value = false;
    }

    return {
      msg,
      headers,
      users,
      alert,
      alertmsg,
      alertcolor,
      search,
      itemsPerPage,
      close,
      getUsers,
    };
  },
};
</script>

<style></style>
