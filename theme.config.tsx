import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import AppOnly from "@/components/apponly";
import PagesOnly from "@/components/pagesonly";
import Cross from "@/components/cross";
import Check from "@/components/check";
import Image from "@/components/externalImage";

const config: DocsThemeConfig = {
  logo: (
    <span className="font-extrabold text-2xl">
      vue2 vue3 migration
    </span>
  ),
  project: {
    link: "https://github.com/chosooyeon/hand-book",
  },
  docsRepositoryBase: "https://github.com/chosooyeon/hand-book",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – vue2 vue3 migration",
      };
    }
  },
  components: {
    Check,
    Cross,
    AppOnly,
    PagesOnly,
    Image,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  darkMode: true,
  footer: {
    text: "vue2 vue3 migration | Using Nextra Docs Template",
  },
};

export default config;
