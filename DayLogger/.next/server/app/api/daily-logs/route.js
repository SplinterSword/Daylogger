/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/daily-logs/route";
exports.ids = ["app/api/daily-logs/route"];
exports.modules = {

/***/ "(rsc)/./app/api/daily-logs/route.ts":
/*!*************************************!*\
  !*** ./app/api/daily-logs/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _utils_ocr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/ocr */ \"(rsc)/./utils/ocr.ts\");\n\nasync function GET() {\n    let ocrData = [];\n    try {\n        const hour = new Date().getHours();\n        for(let i = 0; i < hour + 1; i++){\n            const ocr = await (0,_utils_ocr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i);\n            if (ocr == \"Some trouble fetching OCR\") {\n                throw new Error(ocr);\n            }\n            ocrData.push(ocr);\n        }\n        let data = [];\n        for(let i = 0; i < hour + 1; i++){\n            if (ocrData[i].text == undefined || ocrData[i].text.length < 30) {\n                continue;\n            }\n            const groqData = await fetch('https://daylogger-backend-973390128867.us-central1.run.app/api/groq', {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify({\n                    ocrData: ocrData[i].text\n                })\n            });\n            if (!groqData.ok) {\n                throw new Error('Failed to fetch groq data');\n            }\n            const groqJson = await groqData.json();\n            const { activity, notes } = groqJson;\n            if (activity == 'Error') {\n                throw new Error(notes[0]);\n            }\n            data.push({\n                \"hour\": i,\n                \"startTime\": `${i === 0 ? \"12\" : i > 12 ? i - 12 : i}:00 ${i < 12 ? \"AM\" : \"PM\"}`,\n                \"endTime\": `${i === 11 ? \"12\" : i === 23 ? \"12\" : i + 1 > 12 ? i + 1 - 12 : i + 1}:00 ${i < 11 ? \"AM\" : \"PM\"}`,\n                \"activity\": activity,\n                \"notes\": notes\n            });\n        }\n        return new Response(JSON.stringify(data), {\n            status: 200,\n            headers: {\n                'Content-Type': 'application/json'\n            }\n        });\n    } catch (error) {\n        if (error instanceof Error) {\n            return new Response(JSON.stringify({\n                error: error.message\n            }), {\n                status: 500,\n                headers: {\n                    'Content-Type': 'application/json'\n                }\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2RhaWx5LWxvZ3Mvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUM7QUFFaEMsZUFBZUM7SUFDcEIsSUFBSUMsVUFBZ0IsRUFBRTtJQUV0QixJQUFJO1FBQ0YsTUFBTUMsT0FBTyxJQUFJQyxPQUFPQyxRQUFRO1FBRWhDLElBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSCxPQUFLLEdBQUdHLElBQUs7WUFDL0IsTUFBTUMsTUFBTSxNQUFNUCxzREFBWUEsQ0FBQ007WUFDL0IsSUFBSUMsT0FBTyw2QkFBNkI7Z0JBQ3RDLE1BQU0sSUFBSUMsTUFBTUQ7WUFDbEI7WUFDQUwsUUFBUU8sSUFBSSxDQUFDRjtRQUNmO1FBRUEsSUFBSUcsT0FBTyxFQUFFO1FBRWIsSUFBSyxJQUFJSixJQUFJLEdBQUdBLElBQUlILE9BQUssR0FBR0csSUFBSztZQUMvQixJQUFJSixPQUFPLENBQUNJLEVBQUUsQ0FBQ0ssSUFBSSxJQUFJQyxhQUFhVixPQUFPLENBQUNJLEVBQUUsQ0FBQ0ssSUFBSSxDQUFDRSxNQUFNLEdBQUcsSUFBSTtnQkFDL0Q7WUFDRjtZQUVBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSx1RUFBdUU7Z0JBQ2xHQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRWxCLFNBQVNBLE9BQU8sQ0FBQ0ksRUFBRSxDQUFDSyxJQUFJO2dCQUFDO1lBQ2xEO1lBQ0EsSUFBSSxDQUFDRyxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSWIsTUFBTTtZQUNsQjtZQUNBLE1BQU1jLFdBQVcsTUFBTVIsU0FBU1MsSUFBSTtZQUNwQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFLEdBQUdIO1lBRTVCLElBQUlFLFlBQVksU0FBUztnQkFDdkIsTUFBTSxJQUFJaEIsTUFBTWlCLEtBQUssQ0FBQyxFQUFFO1lBQzFCO1lBRUFmLEtBQUtELElBQUksQ0FBQztnQkFDUixRQUFRSDtnQkFDUixhQUFhLEdBQUdBLE1BQU0sSUFBSSxPQUFPQSxJQUFJLEtBQUtBLElBQUksS0FBS0EsRUFBRSxJQUFJLEVBQUVBLElBQUksS0FBSyxPQUFPLE1BQU07Z0JBQ2pGLFdBQVcsR0FBR0EsTUFBTSxLQUFLLE9BQU9BLE1BQU0sS0FBSyxPQUFPQSxJQUFJLElBQUksS0FBS0EsSUFBSSxJQUFJLEtBQUtBLElBQUksRUFBRSxJQUFJLEVBQUVBLElBQUksS0FBSyxPQUFPLE1BQU07Z0JBQzlHLFlBQVlrQjtnQkFDWixTQUFTQztZQUNYO1FBQ0Y7UUFFQSxPQUFPLElBQUlDLFNBQVNQLEtBQUtDLFNBQVMsQ0FBQ1YsT0FBTztZQUN4Q2lCLFFBQVE7WUFDUlYsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRjtJQUVGLEVBQUUsT0FBT1csT0FBTztRQUNkLElBQUlBLGlCQUFpQnBCLE9BQU87WUFDMUIsT0FBTyxJQUFJa0IsU0FBU1AsS0FBS0MsU0FBUyxDQUFDO2dCQUFFUSxPQUFPQSxNQUFNQyxPQUFPO1lBQUMsSUFBSTtnQkFDNURGLFFBQVE7Z0JBQ1JWLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtZQUNGO1FBQ0Y7SUFDRjtBQUNGIiwic291cmNlcyI6WyIvaG9tZS9zcGxpbnRlcnN3b3JkL0RvY3VtZW50cy9Db21wdXRlcnMvRGF5bG9nZ2VyLWZyb250ZW5kL0RheUxvZ2dlci9hcHAvYXBpL2RhaWx5LWxvZ3Mvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldE9jckJ5SG91ciBmcm9tIFwiQC91dGlscy9vY3JcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgbGV0IG9jckRhdGEgOiBhbnkgPSBbXVxuXG4gIHRyeSB7XG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3VyKzE7IGkrKykge1xuICAgICAgY29uc3Qgb2NyID0gYXdhaXQgZ2V0T2NyQnlIb3VyKGkpXG4gICAgICBpZiAob2NyID09IFwiU29tZSB0cm91YmxlIGZldGNoaW5nIE9DUlwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihvY3IpXG4gICAgICB9XG4gICAgICBvY3JEYXRhLnB1c2gob2NyKVxuICAgIH1cblxuICAgIGxldCBkYXRhID0gW11cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cisxOyBpKyspIHtcbiAgICAgIGlmIChvY3JEYXRhW2ldLnRleHQgPT0gdW5kZWZpbmVkIHx8IG9jckRhdGFbaV0udGV4dC5sZW5ndGggPCAzMCkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBncm9xRGF0YSA9IGF3YWl0IGZldGNoKCdodHRwczovL2RheWxvZ2dlci1iYWNrZW5kLTk3MzM5MDEyODg2Ny51cy1jZW50cmFsMS5ydW4uYXBwL2FwaS9ncm9xJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgb2NyRGF0YTogb2NyRGF0YVtpXS50ZXh0IH0pLFxuICAgICAgfSlcbiAgICAgIGlmICghZ3JvcURhdGEub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZ3JvcSBkYXRhJylcbiAgICAgIH1cbiAgICAgIGNvbnN0IGdyb3FKc29uID0gYXdhaXQgZ3JvcURhdGEuanNvbigpXG4gICAgICBjb25zdCB7IGFjdGl2aXR5LCBub3RlcyB9ID0gZ3JvcUpzb25cblxuICAgICAgaWYgKGFjdGl2aXR5ID09ICdFcnJvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5vdGVzWzBdKVxuICAgICAgfVxuXG4gICAgICBkYXRhLnB1c2goe1xuICAgICAgICBcImhvdXJcIjogaSxcbiAgICAgICAgXCJzdGFydFRpbWVcIjogYCR7aSA9PT0gMCA/IFwiMTJcIiA6IGkgPiAxMiA/IGkgLSAxMiA6IGl9OjAwICR7aSA8IDEyID8gXCJBTVwiIDogXCJQTVwifWAsXG4gICAgICAgIFwiZW5kVGltZVwiOiBgJHtpID09PSAxMSA/IFwiMTJcIiA6IGkgPT09IDIzID8gXCIxMlwiIDogaSArIDEgPiAxMiA/IGkgKyAxIC0gMTIgOiBpICsgMX06MDAgJHtpIDwgMTEgPyBcIkFNXCIgOiBcIlBNXCJ9YCxcbiAgICAgICAgXCJhY3Rpdml0eVwiOiBhY3Rpdml0eSxcbiAgICAgICAgXCJub3Rlc1wiOiBub3RlcyxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShkYXRhKSwge1xuICAgICAgc3RhdHVzOiAyMDAsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIFxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSksIHtcbiAgICAgICAgc3RhdHVzOiA1MDAsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0T2NyQnlIb3VyIiwiR0VUIiwib2NyRGF0YSIsImhvdXIiLCJEYXRlIiwiZ2V0SG91cnMiLCJpIiwib2NyIiwiRXJyb3IiLCJwdXNoIiwiZGF0YSIsInRleHQiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJncm9xRGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJncm9xSnNvbiIsImpzb24iLCJhY3Rpdml0eSIsIm5vdGVzIiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJlcnJvciIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/daily-logs/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdaily-logs%2Froute&page=%2Fapi%2Fdaily-logs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdaily-logs%2Froute.ts&appDir=%2Fhome%2Fsplintersword%2FDocuments%2FComputers%2FDaylogger-frontend%2FDayLogger%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsplintersword%2FDocuments%2FComputers%2FDaylogger-frontend%2FDayLogger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdaily-logs%2Froute&page=%2Fapi%2Fdaily-logs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdaily-logs%2Froute.ts&appDir=%2Fhome%2Fsplintersword%2FDocuments%2FComputers%2FDaylogger-frontend%2FDayLogger%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsplintersword%2FDocuments%2FComputers%2FDaylogger-frontend%2FDayLogger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_splintersword_Documents_Computers_Daylogger_frontend_DayLogger_app_api_daily_logs_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/daily-logs/route.ts */ \"(rsc)/./app/api/daily-logs/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/daily-logs/route\",\n        pathname: \"/api/daily-logs\",\n        filename: \"route\",\n        bundlePath: \"app/api/daily-logs/route\"\n    },\n    resolvedPagePath: \"/home/splintersword/Documents/Computers/Daylogger-frontend/DayLogger/app/api/daily-logs/route.ts\",\n    nextConfigOutput,\n    userland: _home_splintersword_Documents_Computers_Daylogger_frontend_DayLogger_app_api_daily_logs_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkYWlseS1sb2dzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZkYWlseS1sb2dzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZGFpbHktbG9ncyUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGc3BsaW50ZXJzd29yZCUyRkRvY3VtZW50cyUyRkNvbXB1dGVycyUyRkRheWxvZ2dlci1mcm9udGVuZCUyRkRheUxvZ2dlciUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnNwbGludGVyc3dvcmQlMkZEb2N1bWVudHMlMkZDb21wdXRlcnMlMkZEYXlsb2dnZXItZnJvbnRlbmQlMkZEYXlMb2dnZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2dEO0FBQzdIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9zcGxpbnRlcnN3b3JkL0RvY3VtZW50cy9Db21wdXRlcnMvRGF5bG9nZ2VyLWZyb250ZW5kL0RheUxvZ2dlci9hcHAvYXBpL2RhaWx5LWxvZ3Mvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2RhaWx5LWxvZ3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kYWlseS1sb2dzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9kYWlseS1sb2dzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvc3BsaW50ZXJzd29yZC9Eb2N1bWVudHMvQ29tcHV0ZXJzL0RheWxvZ2dlci1mcm9udGVuZC9EYXlMb2dnZXIvYXBwL2FwaS9kYWlseS1sb2dzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdaily-logs%2Froute&page=%2Fapi%2Fdaily-logs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdaily-logs%2Froute.ts&appDir=%2Fhome%2Fsplintersword%2FDocuments%2FComputers%2FDaylogger-frontend%2FDayLogger%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsplintersword%2FDocuments%2FComputers%2FDaylogger-frontend%2FDayLogger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./utils/ocr.ts":
/*!**********************!*\
  !*** ./utils/ocr.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _screenpipe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @screenpipe/js */ \"(rsc)/./node_modules/@screenpipe/js/dist/index.js\");\n\nasync function getOcrByHour(hour) {\n    const todayStr = new Date().toISOString().split('T')[0];\n    try {\n        const results = await _screenpipe_js__WEBPACK_IMPORTED_MODULE_0__.pipe.queryScreenpipe({\n            contentType: \"ocr\",\n            startTime: `${todayStr}T${hour}:00:00.000Z`,\n            endTime: `${todayStr}T${hour + 1}:00:00.000Z`,\n            offset: 0\n        });\n        const finalData = {\n            text: results?.data?.slice(8, results?.data?.length).map((item)=>item?.content?.text).join(' ') !== undefined ? results?.data?.slice(8, results?.data?.length).map((item)=>item?.content?.text).join('\\n') : '',\n            hour: hour\n        };\n        return finalData;\n    } catch (error) {\n        console.error(error);\n        return \"Some trouble fetching OCR\";\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getOcrByHour);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi91dGlscy9vY3IudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUM7QUFPckMsZUFBZUMsYUFBYUMsSUFBWTtJQUVwQyxNQUFNQyxXQUFXLElBQUlDLE9BQU9DLFdBQVcsR0FBR0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBRXZELElBQUk7UUFFQSxNQUFNQyxVQUFVLE1BQU1QLGdEQUFJQSxDQUFDUSxlQUFlLENBQUM7WUFDdkNDLGFBQWE7WUFDYkMsV0FBVyxHQUFHUCxTQUFTLENBQUMsRUFBRUQsS0FBSyxXQUFXLENBQUM7WUFDM0NTLFNBQVMsR0FBR1IsU0FBUyxDQUFDLEVBQUVELE9BQU8sRUFBRSxXQUFXLENBQUM7WUFDN0NVLFFBQVE7UUFDWjtRQUVBLE1BQU1DLFlBQXdCO1lBQzFCQyxNQUFNUCxTQUFTUSxNQUFNQyxNQUFNLEdBQUdULFNBQVNRLE1BQU1FLFFBQVFDLElBQUlDLENBQUFBLE9BQVFBLE1BQU1DLFNBQVNOLE1BQU1PLEtBQUssU0FBU0MsWUFBWWYsU0FBU1EsTUFBTUMsTUFBTSxHQUFHVCxTQUFTUSxNQUFNRSxRQUFRQyxJQUFJQyxDQUFBQSxPQUFRQSxNQUFNQyxTQUFTTixNQUFNTyxLQUFLLFFBQVE7WUFDN01uQixNQUFNQTtRQUNWO1FBRUEsT0FBT1c7SUFFWCxFQUFFLE9BQU9VLE9BQU87UUFDWkMsUUFBUUQsS0FBSyxDQUFDQTtRQUNkLE9BQU87SUFDWDtBQUNKO0FBRUEsaUVBQWV0QixZQUFZQSxFQUFBIiwic291cmNlcyI6WyIvaG9tZS9zcGxpbnRlcnN3b3JkL0RvY3VtZW50cy9Db21wdXRlcnMvRGF5bG9nZ2VyLWZyb250ZW5kL0RheUxvZ2dlci91dGlscy9vY3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGlwZSB9IGZyb20gJ0BzY3JlZW5waXBlL2pzJ1xuXG5pbnRlcmZhY2UgT0NSUmVzdWx0IHtcbiAgICB0ZXh0OiBzdHJpbmc7XG4gICAgaG91cjogbnVtYmVyO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRPY3JCeUhvdXIoaG91cjogbnVtYmVyKSB7XG5cbiAgICBjb25zdCB0b2RheVN0ciA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdXG5cbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBwaXBlLnF1ZXJ5U2NyZWVucGlwZSh7XG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJvY3JcIixcbiAgICAgICAgICAgIHN0YXJ0VGltZTogYCR7dG9kYXlTdHJ9VCR7aG91cn06MDA6MDAuMDAwWmAsXG4gICAgICAgICAgICBlbmRUaW1lOiBgJHt0b2RheVN0cn1UJHtob3VyICsgMX06MDA6MDAuMDAwWmAsXG4gICAgICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgZmluYWxEYXRhIDogT0NSUmVzdWx0ID0ge1xuICAgICAgICAgICAgdGV4dDogcmVzdWx0cz8uZGF0YT8uc2xpY2UoOCwgcmVzdWx0cz8uZGF0YT8ubGVuZ3RoKS5tYXAoaXRlbSA9PiBpdGVtPy5jb250ZW50Py50ZXh0KS5qb2luKCcgJykgIT09IHVuZGVmaW5lZCA/IHJlc3VsdHM/LmRhdGE/LnNsaWNlKDgsIHJlc3VsdHM/LmRhdGE/Lmxlbmd0aCkubWFwKGl0ZW0gPT4gaXRlbT8uY29udGVudD8udGV4dCkuam9pbignXFxuJykgOiAnJyxcbiAgICAgICAgICAgIGhvdXI6IGhvdXJcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gZmluYWxEYXRhXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICByZXR1cm4gXCJTb21lIHRyb3VibGUgZmV0Y2hpbmcgT0NSXCJcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE9jckJ5SG91ciJdLCJuYW1lcyI6WyJwaXBlIiwiZ2V0T2NyQnlIb3VyIiwiaG91ciIsInRvZGF5U3RyIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJyZXN1bHRzIiwicXVlcnlTY3JlZW5waXBlIiwiY29udGVudFR5cGUiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwib2Zmc2V0IiwiZmluYWxEYXRhIiwidGV4dCIsImRhdGEiLCJzbGljZSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJjb250ZW50Iiwiam9pbiIsInVuZGVmaW5lZCIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./utils/ocr.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs/promises");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/posthog-js","vendor-chunks/@opentelemetry","vendor-chunks/@screenpipe"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdaily-logs%2Froute&page=%2Fapi%2Fdaily-logs%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdaily-logs%2Froute.ts&appDir=%2Fhome%2Fsplintersword%2FDocuments%2FComputers%2FDaylogger-frontend%2FDayLogger%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fsplintersword%2FDocuments%2FComputers%2FDaylogger-frontend%2FDayLogger&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();