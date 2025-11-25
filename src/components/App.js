import React from "react";
import PageLayout from "./PageLayout";

function App() {
  return (
    <PageLayout
      header={<h1>Welcome to my website</h1>}
    >
      <p>This is the content of my website.</p>
      {<p>© 2023 My Website. All rights reserved.</p>}
     
    </PageLayout>
  );
}