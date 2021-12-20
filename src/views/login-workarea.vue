<template>
  <scroll-area color="royal-purple">
    <container size="400">
      <template v-if="!selection.logged">
        <h1>Login</h1>

        <form @submit.prevent="pressed">
          <column size="100%">
            <row>
              <column size="100%">
                <input
                  class="input-label fsz"
                  id="email"
                  name="email"
                  autocomplete="off"
                  type="email"
                  placeholder="Email"
                  v-model="selection.email"
                />
              </column>
            </row>

            <row>
              <column size="100%">
                <input
                  class="input-label fsz"
                  id="password"
                  autocomplete="off"
                  name="password"
                  placeholder="Password"
                  type="password"
                  v-model="selection.password"
                />
              </column>
            </row>

            <row>
              <column size="100%">
                <btn class="fsz" type="submit" color="gold-tips" text="Login" />
              </column>
            </row>
          </column>
        </form>
      </template>
      <template v-else>
        <row>
          <column size="100%">
            <btn
              class="fsz"
              @click="deployProjects()"
              color="gold-tips"
              text="Deploy Projects"
            />
          </column>
        </row>
        <row>
          <column size="100%">
            <btn
              class="fsz"
              @click="logoutFirebase()"
              color="persian-red"
              text="Logout From Firebase"
            />
          </column>
        </row>
      </template>
    </container>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import { firebaseApp } from "../modules/firebase";
import "firebase/auth";
import "firebase/firestore";
import { mapGetters } from "vuex";
import { projectsDB } from "../db/projects";
import h from "mr-kernel/modules/helpers";
import { client, clientEnum } from "mr-kernel/enums/clients";
import { formatRawDBToFirebase } from "../modules/format-db";

const db = firebaseApp.firestore();

export default Vue.extend({
  computed: {
    ...mapGetters({
      selection: "getLoginSelection",
    }),
  },
  created() {
    this.$store.commit("setValue", {
      name: "panel",
      value: false,
    });
  },
  beforeDestroy() {
    this.$store.commit("setValue", {
      name: "panel",
      value: true,
    });
  },
  methods: {
    async pressed() {
      try {
        await firebaseApp
          .auth()
          .signInWithEmailAndPassword(
            this.selection.email,
            this.selection.password
          );
        this.selection.logged = true;
        // this.$router.push("home");
        this.$store.commit("setValue", {
          name: "alert",
          value: {
            message: "You are now logged in.",
            status: "success",
          },
        });
      } catch (err) {
        this.$store.commit("setValue", {
          name: "alert",
          value: {
            message: err.message,
            status: "error",
          },
        });
      }
    },
    deployProjects() {
      projectsDB.map(formatRawDBToFirebase).forEach((item) => {
        const id = h.getNewID(client[clientEnum[item.clients[0]]], item.date);
        db.collection("projects").doc(id).set(item);
      });
    },
    logoutFirebase() {
      firebaseApp.auth().signOut();
      this.login.logged = false;
      this.$store.commit("setValue", {
        name: "alert",
        value: {
          message: "You have successfully logged out.",
          status: "success",
        },
      });
    },
  },
});
</script>