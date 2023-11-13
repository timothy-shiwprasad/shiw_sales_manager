var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// css-bundle-update-plugin-ns:/app/node_modules/@remix-run/css-bundle/dist/index.js
var require_dist = __commonJS({
  "css-bundle-update-plugin-ns:/app/node_modules/@remix-run/css-bundle/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var cssBundleHref2;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// app/routes/api.listCustomers.jsx
var require_api_listCustomers = __commonJS({
  "app/routes/api.listCustomers.jsx"() {
    "use strict";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_dist());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-YPVN64O2.css";

// app/styles/general.css
var general_default = "/build/_assets/general-H5CIB2Q3.css";

// app/root.jsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }] : [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: general_default }
  ]
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

// server-entry-module:@remix-run/dev/server-build
var route1 = __toESM(require_api_listCustomers());

// app/routes/configureInvoice.jsx
var configureInvoice_exports = {};
__export(configureInvoice_exports, {
  action: () => action,
  default: () => Page,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_node2 = require("@remix-run/node");

// app/componets/CustomerDataList.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function CustomersDataList({ customers }) {
  return console.log(customers), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("datalist", { id: "customers", children: customers == null ? void 0 : customers.map((customer, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: customer.name, id: customer.id }, void 0, !1, {
    fileName: "app/componets/CustomerDataList.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/componets/CustomerDataList.jsx",
    lineNumber: 4,
    columnNumber: 5
  }, this);
}

// app/utils/db/listCustomers.ts
var import_client = require("@prisma/client");
async function ListCustomers() {
  let prisma = new import_client.PrismaClient();
  await prisma.$connect();
  let customers = await prisma.entity.findMany({
    where: {
      category: {
        some: {
          type: "Customer"
        }
      }
    },
    select: {
      id: !0,
      name: !0
    }
  });
  return await prisma.$disconnect(), customers;
}

// app/routes/configureInvoice.jsx
var import_react_router = require("react-router"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  let formData = await request.formData();
  if (formData.get("_action") == "create") {
    let bill = formData.get("bill") || null, tax = formData.get("tax") || null, date = formData.get("date") || null, customer = formData.get("customer") || null, check = validateInvoiceDetails(date, bill, tax, customer);
    if (console.log(typeof check), typeof check == "string")
      console.log(check);
    else
      return (0, import_react_router.redirect)(
        "/createInvoice?bill=" + bill + "&&type=" + tax + "&&date=" + date + "&&customer=" + customer
      );
    return {};
  }
}, loader = async () => {
  let customers = await ListCustomers();
  return (0, import_node2.json)({ customers });
};
function Page() {
  let { customers } = (0, import_react3.useLoaderData)();
  return console.log(customers), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "cfi-body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CustomersDataList, { customers }, void 0, !1, {
      fileName: "app/routes/configureInvoice.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container px-4 cfi-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "columns-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "c-cr", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "radio", id: "cash", name: "bill", value: "cash" }, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 60,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "cash", children: "Cash" }, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 61,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 62,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "radio", id: "credit", name: "bill", value: "credit" }, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "html", children: "Credit" }, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 64,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 65,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/configureInvoice.jsx",
          lineNumber: 59,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "c-cr", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "radio", id: "vat", name: "tax", value: "vat" }, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 69,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "html", children: "Vat" }, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 71,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              type: "radio",
              id: "zero-rated",
              name: "tax",
              value: "zero-rated"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/configureInvoice.jsx",
              lineNumber: 72,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "html", children: "Zero Rated" }, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 78,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("br", {}, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 79,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/configureInvoice.jsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/configureInvoice.jsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "columns-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "cfi-date", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "birthday", children: "Invoice Date:" }, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 85,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "date", id: "date", name: "date" }, void 0, !1, {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 86,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/configureInvoice.jsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "cfi-customers", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "input",
          {
            className: "",
            type: "text",
            list: "customers",
            name: "customer"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/configureInvoice.jsx",
            lineNumber: 89,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/configureInvoice.jsx",
          lineNumber: 88,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/configureInvoice.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "", type: "submit", name: "_action", value: "create", children: "Generate" }, void 0, !1, {
        fileName: "app/routes/configureInvoice.jsx",
        lineNumber: 97,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/configureInvoice.jsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/configureInvoice.jsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/configureInvoice.jsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function validateInvoiceDetails(date, bill, type, customer) {
  return date == null ? "No Date Specified" : bill == null ? "Bill type not Specified" : type == null ? "Tax Bill not specified" : customer == null ? "No Customer Specified" : !0;
}

// app/routes/createInvoice.jsx
var createInvoice_exports = {};
__export(createInvoice_exports, {
  default: () => CreateInvoice,
  loader: () => loader2
});

// app/utils/UpdateRows.js
function updateRows(e) {
  let details = find_matching_product(e.target.value), rows = document.getElementsByTagName("tr"), row = null;
  for (let i = 1; i < rows.length; i++)
    if (rows[i].getAttribute("data-row") == e.target.dataset.key) {
      row = rows[i], console.log("found");
      break;
    }
  let td = row.childNodes;
  for (let i = 0; i < td.length; i++)
    if (td[i].id == "case_size") {
      let input = td[i].childNodes[0];
      input.value = details.case_size;
    } else if (td[i].id == "price") {
      let input = td[i].childNodes[0];
      input.value = details.price;
    }
}
function find_matching_product(product) {
  let products = [
    {
      name: "Chocolate",
      price: "100",
      case_size: 24
    },
    {
      name: "Coconut",
      price: "200",
      case_size: 24
    },
    {
      name: "Strawberry",
      price: "300",
      case_size: 24
    },
    {
      name: "Vanilla",
      price: "400",
      case_size: 24
    }
  ];
  for (let i = 0; i < products.length; i++)
    if (products[i].name == product)
      return products[i];
}

// app/utils/GenerateInvoiceJson.js
var import_node3 = require("@remix-run/node"), import_axios = require("axios");

// app/utils/CreateInvoice.js
var import_easyinvoice = __toESM(require("easyinvoice"));
async function EasyInvoice(products) {
  var data = {
    // "customize": {
    //     "template": "SGVsbG8gd29ybGQh" // Must be base64 encoded html. This example contains 'Hello World!' in base64
    // },
    images: {
      logo: "https://public.easyinvoice.cloud/img/logo_en_original.png",
      background: "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
    },
    sender: {
      company: "Shiw Sales and Service",
      address: "Lot 73 La Bonne Intention",
      zip: "",
      city: "East Coast Demerara",
      country: "Guyana"
      // "custom1": "custom value 1",
      // "custom2": "custom value 2",
      // "custom3": "custom value 3"
    },
    client: {
      company: "Client Corp",
      address: "Clientstreet 456",
      zip: "4567 CD",
      city: "Clientcity",
      country: "Clientcountry"
      // "custom1": "custom value 1",
      // "custom2": "custom value 2",
      // "custom3": "custom value 3"
    },
    information: {
      number: "2021.0001",
      date: "12-12-2021",
      "due-date": " "
    },
    products: null,
    "bottom-notice": "Goods not returnable after 7 days",
    settings: {
      currency: ""
      // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
    },
    translate: {}
  };
  data.products = products, console.log(data);
  let result = await import_easyinvoice.default.createInvoice(data);
  import_easyinvoice.default.download("myInvoice.pdf", result.pdf);
}

// app/utils/GenerateInvoiceJson.js
async function GenerateInvoiceJson(e) {
  let product_rows = document.getElementsByClassName("row"), items = [];
  for (let i = 0; i < product_rows.length; i++) {
    let row = product_rows[i].childNodes;
    if (e.target.dataset.key == 1) {
      let item = getvaluejson(row, !0);
      items.push(item);
    } else {
      let item = getvaluejson(row, !1);
      items.push(item);
    }
  }
  EasyInvoice(items);
}
function getvaluejson(row, vat) {
  let quantity = ReturnQuantity(row[0]), case_size = ReturnCaseSize(row[1]), description = ReturnDescription(row[2]), price = ReturnPrice(row[3]);
  return vat ? {
    quantity: case_size * quantity,
    price,
    "tax-rate": 14,
    description: description + " -- " + case_size + " per case"
  } : {
    quantity: case_size * quantity,
    price,
    description: description + " -- " + case_size + " per case",
    "tax-rate": 0
  };
}
function ReturnQuantity(column) {
  return column.childNodes[0].value;
}
function ReturnCaseSize(column) {
  let column_children = column.childNodes;
  return parseInt(column_children[0].value);
}
function ReturnDescription(column) {
  return column.childNodes[0].value;
}
function ReturnPrice(column) {
  let column_children = column.childNodes;
  return parseInt(column_children[0].value);
}

// app/utils/calculateSubTotal.js
function calculateSubtotal() {
  let product_rows = document.getElementsByClassName("row"), subtotal = 0;
  for (let i = 0; i < product_rows.length; i++) {
    let td = product_rows[i].childNodes;
    for (let j = 0; j < td.length; j++)
      if (td[j].id == "item-total") {
        let row_total = td[j].childNodes;
        row_total = row_total[0].value, subtotal += parseInt(row_total);
      }
  }
  set_total_box_dom(subtotal);
}
function set_total_box_dom(subtotal) {
  let children = (document.getElementById("zero-rated") || document.getElementById("vat-totals")).childNodes;
  if (children.length == 4) {
    let vat = Math.round(subtotal * 0.14), final_total = subtotal + vat, subtotal_div_children_left = children[0].childNodes[1];
    subtotal_div_children_left.innerHTML = subtotal;
    let vat_div_children_left = children[1].childNodes[1];
    vat_div_children_left.innerHTML = vat;
    let final_div_children_left = children[2].childNodes[1];
    final_div_children_left.innerHTML = final_total;
  }
  if (children.length == 2) {
    let final_div_children_left = children[0].childNodes[1];
    final_div_children_left.innerHTML = subtotal;
  }
}

// app/utils/calculateRowtotal.js
function calculateRowtotal(e) {
  if (e.code != "Enter")
    return;
  let case_size, price, quantity = null, total_column = null, rows = document.getElementsByTagName("tr"), row = null;
  for (let i = 1; i < rows.length; i++)
    if (rows[i].getAttribute("data-row") == e.target.dataset.key) {
      row = rows[i], console.log("found");
      break;
    }
  let td = row.childNodes;
  for (let i = 0; i < td.length; i++)
    td[i].id == "case_size" ? case_size = td[i].childNodes[0].value : td[i].id == "price" ? price = td[i].childNodes[0].value : td[i].id == "quantity" ? quantity = td[i].childNodes[0].value : td[i].id == "item-total" && (total_column = td[i].childNodes[0]);
  quantity && (total_column.value = Number(quantity) * Number(case_size) * Number(price)), calculateSubtotal();
}

// app/utils/AddRow.js
function AddRow(index) {
  let table_row = document.getElementById("invoice-body").insertRow(-1);
  table_row.setAttribute("data-row", index), table_row.className = "row";
  let row_info = [
    {
      id: "quantity",
      input_className: "item-input",
      input_type: "number"
    },
    {
      id: "case_size",
      input_className: "item-input",
      input_type: "number"
    },
    {
      id: "description",
      input_className: "item-input",
      input_type: "text",
      list: "products",
      "data-key": index
    },
    {
      id: "price",
      input_className: "item-input",
      input_type: "number"
    },
    {
      id: "item-total",
      input_className: "item-total",
      input_type: "number"
    }
  ];
  for (let i = 0; i < row_info.length; i++)
    if (i == 0) {
      let column = document.createElement("td");
      column.id = row_info[i].id;
      let column_input = document.createElement("input");
      column_input.className = row_info[i].input_className, column_input.type = row_info[i].input_type, column_input.setAttribute("data-key", index), column_input.onkeydown = calculateRowtotal, column.appendChild(column_input), table_row.appendChild(column);
    } else if (i == 2) {
      let column = document.createElement("td"), column_input = document.createElement("input");
      column.id = row_info[i].id, column_input.className = row_info[i].input_className, column_input.type = "text", column_input.setAttribute("list", row_info[i].list), column_input.setAttribute("data-key", index), column.onchange = updateRows, column.appendChild(column_input), table_row.appendChild(column);
    } else if (i == 4) {
      let column = document.createElement("td");
      column.id = row_info[i].id, column.onchange = calculateSubtotal;
      let column_input = document.createElement("input");
      column_input.disabled = !0, column_input.className = row_info[i].input_className, column_input.type = row_info[i].input_type, column.appendChild(column_input), table_row.appendChild(column);
    } else {
      let column = document.createElement("td");
      column.id = row_info[i].id;
      let column_input = document.createElement("input");
      column_input.className = row_info[i].input_className, column_input.type = row_info[i].input_type, column.appendChild(column_input), table_row.appendChild(column);
    }
}

// app/componets/AddRowButton.jsx
var import_react4 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function addButton() {
  let [rowCount, IncreaseCount] = (0, import_react4.useState)(2);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "add-button", title: "Add Row", onClick: () => {
    IncreaseCount(rowCount + 1), AddRow(rowCount);
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "32",
      height: "32",
      fill: "currentColor",
      className: "bi bi-plus-square",
      viewBox: "0 0 16 16",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" }, void 0, !1, {
          fileName: "app/componets/AddRowButton.jsx",
          lineNumber: 24,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" }, void 0, !1, {
          fileName: "app/componets/AddRowButton.jsx",
          lineNumber: 25,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/componets/AddRowButton.jsx",
      lineNumber: 16,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/componets/AddRowButton.jsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/componets/InvoiceTable.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function InvoiceTable({ isVat }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("table", { className: "table-fixed invoice-table ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { children: "Quantity" }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 8,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { children: "Case size" }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { children: "Description" }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { children: "Price" }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 11,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("th", { children: "Total" }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 12,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/InvoiceTable.jsx",
      lineNumber: 7,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/componets/InvoiceTable.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tbody", { id: "invoice-body", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("tr", { className: "row", "data-row": 1, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { id: "quantity", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          className: "item-input",
          type: "number",
          onKeyDown: calculateRowtotal,
          "data-key": 1
        },
        void 0,
        !1,
        {
          fileName: "app/componets/InvoiceTable.jsx",
          lineNumber: 18,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { id: "case_size", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { className: "item-input", type: "number" }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { id: "description", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "input",
        {
          className: "item-input",
          type: "text",
          list: "products",
          "data-key": 1,
          onChange: updateRows
        },
        void 0,
        !1,
        {
          fileName: "app/componets/InvoiceTable.jsx",
          lineNumber: 29,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { id: "price", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { className: "item-input", type: "number" }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("td", { id: "item-total", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { className: "item-total", type: "number", disabled: !0 }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 41,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/componets/InvoiceTable.jsx",
        lineNumber: 40,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/InvoiceTable.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/componets/InvoiceTable.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/componets/InvoiceTable.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/componets/DataList.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function DataList() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("datalist", { id: "products", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "Chocolate" }, void 0, !1, {
      fileName: "app/componets/DataList.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "Coconut" }, void 0, !1, {
      fileName: "app/componets/DataList.jsx",
      lineNumber: 5,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "Strawberry" }, void 0, !1, {
      fileName: "app/componets/DataList.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "Vanilla" }, void 0, !1, {
      fileName: "app/componets/DataList.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/componets/DataList.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/componets/TotalBox.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function TotalBox({ isVat, totals }) {
  return isVat == "vat" ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { id: "vat-totals", className: "total-box grid grid-cols-1 divide-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "sub-total", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { id: "left", children: "Sub Total :" }, void 0, !1, {
        fileName: "app/componets/TotalBox.jsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { id: "right", children: [
        "$",
        totals.subtotal
      ] }, void 0, !0, {
        fileName: "app/componets/TotalBox.jsx",
        lineNumber: 10,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/TotalBox.jsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "vat", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { id: "left", children: "VAT : " }, void 0, !1, {
        fileName: "app/componets/TotalBox.jsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { id: "right", children: [
        "$",
        totals.vat
      ] }, void 0, !0, {
        fileName: "app/componets/TotalBox.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/TotalBox.jsx",
      lineNumber: 12,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "final-total", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { id: "left", children: " Final Total : " }, void 0, !1, {
        fileName: "app/componets/TotalBox.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { id: "right", children: [
        "$",
        totals.finalTotal
      ] }, void 0, !0, {
        fileName: "app/componets/TotalBox.jsx",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/TotalBox.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "button",
      {
        className: "Generate_Invoice",
        "data-type": 1,
        onClick: GenerateInvoiceJson,
        children: "Generate Invoice"
      },
      void 0,
      !1,
      {
        fileName: "app/componets/TotalBox.jsx",
        lineNumber: 20,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/componets/TotalBox.jsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { id: "zero-rated", className: "total-box border-solid border-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "final-total", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { id: "left", children: " Final Total : " }, void 0, !1, {
        fileName: "app/componets/TotalBox.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { id: "right", children: [
        "$",
        totals.finalTotal
      ] }, void 0, !0, {
        fileName: "app/componets/TotalBox.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/TotalBox.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
      "button",
      {
        className: "Generate_Invoice",
        "data-type": 0,
        onClick: GenerateInvoiceJson,
        children: "Generate Invoice"
      },
      void 0,
      !1,
      {
        fileName: "app/componets/TotalBox.jsx",
        lineNumber: 37,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/componets/TotalBox.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// app/componets/DetailsBox.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function DetailsBox({ date, customerName, billType }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "detail-box grid grid-cols-1 divide-1", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { id: "left", children: "Date :" }, void 0, !1, {
        fileName: "app/componets/DetailsBox.jsx",
        lineNumber: 5,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { id: "right", children: date }, void 0, !1, {
        fileName: "app/componets/DetailsBox.jsx",
        lineNumber: 6,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/DetailsBox.jsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { id: "left", children: "Type :" }, void 0, !1, {
        fileName: "app/componets/DetailsBox.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { id: "right", children: billType }, void 0, !1, {
        fileName: "app/componets/DetailsBox.jsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/DetailsBox.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { id: "left", children: "Customer :" }, void 0, !1, {
        fileName: "app/componets/DetailsBox.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { id: "right", children: customerName }, void 0, !1, {
        fileName: "app/componets/DetailsBox.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/DetailsBox.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/componets/DetailsBox.jsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/createInvoice.jsx
var import_react5 = require("react"), import_react6 = require("@remix-run/react"), import_node4 = require("@remix-run/node");

// app/utils/db/getCustomerDetails.ts
var import_client2 = require("@prisma/client");
async function getCustomerDetails(name) {
  let prisma = new import_client2.PrismaClient();
  await prisma.$connect();
  try {
    return await prisma.entity.findFirst({
      where: {
        name
      }
    });
  } catch (error) {
    console.log(error);
  } finally {
    await prisma.$disconnect();
  }
}

// app/routes/createInvoice.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let url = new URL(request.url), bill = url.searchParams.get("bill"), type = url.searchParams.get("type"), date = url.searchParams.get("date"), customer = url.searchParams.get("customer"), customerDetails = await getCustomerDetails(customer);
  return console.log("customer ", customerDetails), (0, import_node4.json)({
    isvat: type,
    bill,
    date,
    customer
  });
};
function CreateInvoice() {
  let { isvat, date, customer } = (0, import_react6.useLoaderData)(), [rowCount, setRowCount] = (0, import_react5.useState)(2), [totals, setTotals] = (0, import_react5.useState)({
    subtotal: 0,
    vat: 0,
    finalTotal: 0
  });
  return console.log(isvat), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "main-body", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(DataList, {}, void 0, !1, {
      fileName: "app/routes/createInvoice.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(InvoiceTable, { isVat: isvat }, void 0, !1, {
      fileName: "app/routes/createInvoice.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(DetailsBox, { date, billType: isvat, customerName: customer }, void 0, !1, {
      fileName: "app/routes/createInvoice.jsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(TotalBox, { isVat: isvat, totals }, void 0, !1, {
      fileName: "app/routes/createInvoice.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(addButton, {}, void 0, !1, {
      fileName: "app/routes/createInvoice.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/createInvoice.jsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/addproduct.jsx
var addproduct_exports = {};
__export(addproduct_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta
});
var import_react7 = require("@remix-run/react"), import_client3 = require("@prisma/client"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), meta = () => [
  { title: "Bill Generator" },
  { name: "description", content: "Welcome to Remix!" }
], loader3 = async () => {
  let prisma = new import_client3.PrismaClient();
  await prisma.$connect();
  let allproducts = await prisma.products.findMany();
  return await prisma.$disconnect(), console.log("allproducts", allproducts), console.log("hello"), allproducts;
};
function Index() {
  let allproducts = (0, import_react7.useLoaderData)();
  return console.log("all", allproducts), /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Hello" }, void 0, !1, {
    fileName: "app/routes/addproduct.jsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}

// app/routes/Invoice.tsx
var Invoice_exports = {};
__export(Invoice_exports, {
  default: () => Invoice
});
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Invoice() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { children: "hello" }, void 0, !1, {
    fileName: "app/routes/Invoice.tsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/testing.jsx
var testing_exports = {};
__export(testing_exports, {
  default: () => Page2
});
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Page2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: "Testinhg 123 hello" }, void 0, !1, {
    fileName: "app/routes/testing.jsx",
    lineNumber: 2,
    columnNumber: 10
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2,
  loader: () => loader4,
  meta: () => meta2
});
var import_react8 = require("@remix-run/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), meta2 = () => [
  { title: "Bill Generator" },
  { name: "description", content: "Welcome to Remix!" }
], loader4 = async () => null;
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text", children: "hello i love you too much nnn" }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-XD7JZCB5.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-WVLLOHPW.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-VBXOWJ6H.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-H6WGT7VJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/Invoice": { id: "routes/Invoice", parentId: "root", path: "Invoice", index: void 0, caseSensitive: void 0, module: "/build/routes/Invoice-T5YTDB6R.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-ZURJ6ARQ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/addproduct": { id: "routes/addproduct", parentId: "root", path: "addproduct", index: void 0, caseSensitive: void 0, module: "/build/routes/addproduct-L62NXQSB.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.listCustomers": { id: "routes/api.listCustomers", parentId: "root", path: "api/listCustomers", index: void 0, caseSensitive: void 0, module: "/build/routes/api.listCustomers-6GLW6VOM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/configureInvoice": { id: "routes/configureInvoice", parentId: "root", path: "configureInvoice", index: void 0, caseSensitive: void 0, module: "/build/routes/configureInvoice-7P63YOMV.js", imports: ["/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/createInvoice": { id: "routes/createInvoice", parentId: "root", path: "createInvoice", index: void 0, caseSensitive: void 0, module: "/build/routes/createInvoice-AJKK7KNN.js", imports: ["/build/_shared/chunk-NBEH4DGX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/testing": { id: "routes/testing", parentId: "root", path: "testing", index: void 0, caseSensitive: void 0, module: "/build/routes/testing-MTJDNTPI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "22bc9ac6", hmr: { runtime: "/build/_shared/chunk-VBXOWJ6H.js", timestamp: 1696989924013 }, url: "/build/manifest-22BC9AC6.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api.listCustomers": {
    id: "routes/api.listCustomers",
    parentId: "root",
    path: "api/listCustomers",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/configureInvoice": {
    id: "routes/configureInvoice",
    parentId: "root",
    path: "configureInvoice",
    index: void 0,
    caseSensitive: void 0,
    module: configureInvoice_exports
  },
  "routes/createInvoice": {
    id: "routes/createInvoice",
    parentId: "root",
    path: "createInvoice",
    index: void 0,
    caseSensitive: void 0,
    module: createInvoice_exports
  },
  "routes/addproduct": {
    id: "routes/addproduct",
    parentId: "root",
    path: "addproduct",
    index: void 0,
    caseSensitive: void 0,
    module: addproduct_exports
  },
  "routes/Invoice": {
    id: "routes/Invoice",
    parentId: "root",
    path: "Invoice",
    index: void 0,
    caseSensitive: void 0,
    module: Invoice_exports
  },
  "routes/testing": {
    id: "routes/testing",
    parentId: "root",
    path: "testing",
    index: void 0,
    caseSensitive: void 0,
    module: testing_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/index.js:
  (**
   * @remix-run/css-bundle v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=index.js.map
