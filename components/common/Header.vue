<template>
  <header>
    <NuxtLink to="/"
      ><img src="../../assets/seed-icon.png" class="header-icon" width="30"
    /></NuxtLink>
    <div class="header-menu">
      <NuxtLink to="/app" v-if="isLogged" :class="`menu-link${homeMenu ? ' home' : ''}`"><UserIcon /></NuxtLink>
      <button v-if="isLogged" class="clear" @click="logOut">
        <LogoutIcon />
      </button>
      <button v-if="!homeMenu" class="mobile-menu clear" @click="openMenu">
        <MenuIcon />
      </button>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from "/components/utils/functions";
import LogoutIcon from "../../assets/svg/logout.svg";
import UserIcon from "../../assets/svg/user.svg";
import MenuIcon from "../../assets/svg/menu.svg";
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["homeMenu"],
  components: {
    LogoutIcon,
    UserIcon,
    MenuIcon
  },
  methods: {
    openMenu() {
      const menu = document.querySelector(".menu-bar");
      if (!menu.classList.contains("show")) {
        menu.classList.add("show");
      } else {
        menu.classList.remove("show");
      }
    },
    logOut() {
      deleteCookie("XSRF-TOKEN");
      window.location.href = "/";
    },
  },
  computed: {
    ...mapGetters({
      isLogged: "isLogged",
    }),
  },
};
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: var(--header-height);
  background-color: white;
  border-bottom: 4px solid #f3f3f3;
}

.github-icon {
  display: block;
}

.header-menu {
  display: flex;
  align-items: center;
}
.header-icon {
  display: block;
}
.logo {
  width: 115px;
  height: auto;
}
.nuxt-link-active {
  font-weight: unset;
  color: white !important;
}
.mobile-menu {
  appearance: none;
  background: none;
  border: none;
  margin-right: 30px;
}
.menu-link.home {
  display: block;
}
@media (min-width: 540px) {
  header {
    padding: 0 var(--header-padding);
  }
}
@media (min-width: 1024px) {
  .menu-link {
    display: block;
  }
  .mobile-menu {
    display: none;
  }
}
</style>
