"use strict";

(function () {
  (function () {
    (function (e, t) {
      if (typeof exports == "object") module.exports = t();else if (typeof define == "function" && define.amd) define("components/my-test/test-if", [], t);else {
        var n = "Nova.Components.MyTest",
            r = n.split("."),
            i = e;for (var s = 0; s < r.length - 1; s++) i[r[s]] === undefined && (i[r[s]] = {}), i = i[r[s]];i[r[r.length - 1]] = t();
      }
    })(this, function () {
      function e(e) {
        return ({})[e];
      }var t = undefined;return (NovaExports.__fixedUglify = "script>", NovaExports.exports = { stylesheet: "", template: "\n        <p>Welcome</p>\n        <p>-------start--------</p>\n        <template-if if=\"{{gender == &apos;female&apos;}}\">\n            I&apos;m a girl, {{gender}}\n        </template-if>\n        <p>---------------</p>\n        <template-if if=\"{{gender == &apos;male&apos;}}\">\n            I&apos;m a boy, {{gender}}\n        </template-if>\n        <p>-------end--------</p>\n    " }, NovaExports({ is: "test-if", props: { gender: { type: String, value: "female" } }, createdHandler: function createdHandler() {} }), t);
    });
  }).call(window);
})();