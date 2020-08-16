export default function fetchData(url, body, callbackSuccess, callbackFaild) {
  let httpPromise = new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((res) => {
        // 如果登录接口返回成功，那么把返回的json返回回去
        return res.json();
      })
      .then((json) => {
        resolve(json);
      })
      .catch((e) => {
        // 如果失败，把错误返回回去。
        reject(e);
      });
  });
  Promise.race([
    httpPromise,
    new Promise(function (resolve, reject) {
      setTimeout(() => reject(new Error('request timeout')), 5000);
    }),
  ])
    .then((data) => {
      //请求成功
      // alert(data.res)
      if (data.res === 'success') {
        callbackSuccess();
      } else {
        callbackFaild('User name or Password error!');
      }
      // return data.res;
    })
    .catch(() => {
      //请求失败
      callbackFaild('Network Faild');
    });
}
