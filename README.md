# Test using pug and sass on gulp v4.

DEMO  
[https://evofan.github.io/test_pug_sass_gulp4/dist/index.html](https://evofan.github.io/test_pug_sass_gulp4/dist/index.html)  

usage  
`npm install`  
`gulp`  

exec.  
<img src="https://evofan.github.io/test_pug_sass_gulp4/screenshot/pic_gulp.png" width="50%">   

reference  

**pugとsassを使う方法【準備編】 | ゼロから始めるweb屋な生活**  
[https://webya.site/preparation-pug-sass/](https://webya.site/preparation-pug-sass/)  
>今回はhtmlとcssをより簡潔に書く方法をご紹介します。
>ずばりその方法とは『pug（パグ）』と『sass（サス）』の導入です。

**gulp環境の再設定**  
[https://scleapt.com/gulp_resetting/](https://scleapt.com/gulp_resetting/)  
>npm install -g gulp

**【デザイナー向け】どうしてもgulp、npm、sass、pugを操作しなければならない人への説明書 - Qiita**  
[https://qiita.com/yukiTTT/items/08daa80a6a3062f3e16e](https://qiita.com/yukiTTT/items/08daa80a6a3062f3e16e)  
>pug（文章）【.pug】
>sass (装飾)【.scss】

**gulp v4.0.0がプレリリース！ 移行方法と変更点まとめ | Satoshi Shoji’s Blog**  
[https://satoyan419.com/post/gulp-v4/](https://satoyan419.com/post/gulp-v4/)  
>gulp v4の環境で実行すると、下記のエラーが発生します。
>AssertionError: Task function must be specified
>gulp v4の環境でタスクを実行するためには、gulpfile.jsの記述を下記のように書き換える必要があります。
>
>gulp.taskだけでなくgulp.watchの引数も、gulp v4で変更になります

**ulp環境構築にて「AssertionError [ERR_ASSERTION]: Task function must be specified」の  
原因はgulp v4にバージョンアップした事による仕様変更 - Qiita**  
[https://qiita.com/shun_kominato/items/7c9777341a8045d863c2](https://qiita.com/shun_kominato/items/7c9777341a8045d863c2)  
>gulpのバージョンが４に上がったことにより、gulpfile.jsのgulp.task()の引数の指定方法が変わった。
