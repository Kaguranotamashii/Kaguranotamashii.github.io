//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/abda03aa7aafb13b4b643516d8c6940a.jpeg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/9846301852f6a60031d170a5b8e62e6c.jpg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/20220416112801.png)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/f04a869483dd588b41ab3f8424a42878.png)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/fb2f0227e29b51f33cb9f67dbc4503ba.jpg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/05ad55062a8ab0719bf63ae2cae8ede4.jpg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/d9f183fe3211df28dc56521ba4533ed1.jpg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/f78266863bfe20d7faf574344b851e80.jpeg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/6294931695ca322491259a86865d0d76.jpeg)"
  ];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * backimg.length);
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =[
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/abda03aa7aafb13b4b643516d8c6940a.jpeg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/9846301852f6a60031d170a5b8e62e6c.jpg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/20220416112801.png)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/f04a869483dd588b41ab3f8424a42878.png)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/fb2f0227e29b51f33cb9f67dbc4503ba.jpg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/05ad55062a8ab0719bf63ae2cae8ede4.jpg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/d9f183fe3211df28dc56521ba4533ed1.jpg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/f78266863bfe20d7faf574344b851e80.jpeg)",
    "url(https://kaguranotamashii-1308648145.cos.ap-beijing.myqcloud.com/6294931695ca322491259a86865d0d76.jpeg)"
  ];
  //获取banner图片总数，生成随机数
  var bannerindex =Math.floor(Math.random() * bannerimg.length);
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];