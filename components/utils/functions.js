export const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'
  ));

  return matches && matches !== 'null' ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const emailValidator = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


export const getMLDocument = async (fileName) => {
  return new Promise(function (resolve, reject) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function (e) {
      const xmlString = e.currentTarget.responseText;

      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlString, "text/xml");
      const list = xml.getElementsByTagName("book");

      const xmlData = {
        xmlString: xmlString,
        xmlList: list
      };
  
      resolve(xmlData);
    };

    xmlhttp.onerror = function (e) {
      reject();
    };

    xmlhttp.open("GET", `/vue-up${fileName}`, true);
    xmlhttp.send();
  });
};