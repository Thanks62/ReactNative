export default function fetchData(url, body) {
  let promise = new Promise((resolve, reject) => {
    this.timer = setTimeout(() => {
      reject(new Error('超时了'));
    }, 20000);
  })
    .then((data) => {})
    .catch((e) => {});

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

  Promise.race([promise, httpPromise])
    .then((json) => {
      // this.LoadingDialog.close();
      if (json.Statu == 1) {
        // this.props.login_in(json.Data);
        alert(json.Data)
      } else {
        // this.props.loginFail();
        alert('failed')
      }
      new Promise((resolve, reject) => {
        this.timer = setTimeout(() => {
          resolve();
        }, 500);
      })
        .then(() => {
          Alert.alert(
            '提示',
            json.Msg,
            [
              {
                text: '确定',
                onPress: () => {},
              },
            ],
            {cancelable: false},
          );
        })
        .catch((e) => {
          console.log('出现异常' + e.toString());
        });
    })
    .catch((e) => {
      // this.LoadingDialog.close();
      new Promise((resolve, reject) => {
        this.timer = setTimeout(() => {
          resolve();
        }, 500);
      }).then(() => {
        Alert.alert(
          '提示',
          e.toString(),
          [
            {
              text: '确定',
              onPress: () => {},
            },
          ],
          {cancelable: false},
        );
      });
    });
}
