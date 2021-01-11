import loadable from "@loadable/component";

export default loadable(() => import("./component"), {
  fallback: <div>Loading...</div>,
});
