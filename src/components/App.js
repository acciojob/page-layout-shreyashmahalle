import React from "react";
import PageLayout from "./PageLayout";

const App = () => {
  return(
    <PageLayout
      header = {<h1>Wwlcome to my website</h1>}
      footer = {<p>©2023 My website. All rights reserved.</p>}
      >
        <p>This is the content of my website...</p>
    </PageLayout>
  )
}

