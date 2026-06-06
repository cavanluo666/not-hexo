var posts=["2026/02/26/hello world/","2026/06/06/c++笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };