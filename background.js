chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    let headers = details.requestHeaders || [];
    headers.push({ name: "x-cache", value: "hit" });
    return { requestHeaders: headers };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);
