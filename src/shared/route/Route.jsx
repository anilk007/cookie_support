import React from "react";
import { Route, Routes } from "react-router-dom";

import Menu from "../menu/Menu";

import AppForm from "../../components/app_form/AppForm";

import SampleLogger from "../../components/sample_logger/SampleLogger";

import SampleCookieExample from "../../components/cookie_support/sample_cookie_support/SampleCookieExample";

function RouteComponent() {
  return (
    <Routes>
      <Route exact path="/" component={<Menu />} />
      <Route path="/app-form" element={<AppForm />} />
      <Route path="/sample-logger" element={<SampleLogger />} />

      <Route path="/sample-cookie" element={<SampleCookieExample />} />

    </Routes>
  );
}

export default RouteComponent;
