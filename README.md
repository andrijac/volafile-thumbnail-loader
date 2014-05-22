volafile-thumbnail-loader
=========================

Script loads thumbnails in volafile.io room. 

Tested in Firefox 28 and Google Chrome 35.

Tools used: 

- Uglify tool: http://marijnhaverbeke.nl/uglifyjs
- Bookmarklet tool: http://mrcoles.com/bookmarklet/

Bookmarklet: <br />

    javascript:(function()%7B!function()%7B%22use%20strict%22%3Bfunction%20a(a%2Cb)%7Ba.parentNode.insertBefore(b%2Ca.nextSibling)%7Dfunction%20b(a)%7Bvar%20b%2Cc%2Cd%2Ce%2Cf%2Cg%2Ch%2Ci%2Cj%3Bfor(b%3Da.lastIndexOf(%22.%22)%2Cc%3Da.substr(b%2B1%2Ca.length-b-1)%2Cd%3D%5B%22png%22%2C%22jpg%22%2C%22bmp%22%2C%22gif%22%2C%22jpeg%22%5D%2Ce%3D0%2Cf%3Dd.length%3Bf%3Ee%3Be%2B%2B)d.push(d%5Be%5D.toUpperCase())%3Breturn-1!%3D%3Dd.indexOf(c)%3F(g%3D%22%2Fget%2F%22%2Ch%3Da.indexOf(g)%2Ci%3Da.lastIndexOf(%22%2F%22)%2Cj%3Da.substring(h%2Bg.length%2Ci)%2C%22%2Fget_asset%2Fthumb%2F%22%2Bj)%3Anull%7Dfunction%20c(a%2Cb)%7Ba.parentNode.className%3D%3D%3Db%3Fa.parentNode.style.height%3D%22auto%22%3Ac(a.parentNode%2Cb)%7D!function()%7Bvar%20d%2Ce%2Cf%2Cg%2Ch%2Ci%3Bfor(f%3Ddocument.getElementsByClassName(%22file_name%22)%2Cd%3D0%2Ce%3Df.length%3Bd%3Cf.length%3Bd%2B%2B)g%3Df%5Bd%5D.href%2Ch%3Db(g)%2Ch%26%26(i%3Ddocument.createElement(%22div%22)%2Ci.style.display%3D%22block%22%2Ci.innerHTML%3D'%3Cimg%20src%3D%22'%2Bh%2B'%22%20%2F%3E'%2Cc(f%5Bd%5D%2C%22filelist_file%22)%2Ca(f%5Bd%5D%2Ci))%7D()%7D()%7D)()

          /\___/\
         (  o o  )
         /   *   \
         \__\_/__/ meow!
           /   \
          / ___ \
          \/___\/