
// git：用来管理代码，在公司里面用于团队协作（多人开发）
// git工作流程：工作区 -> 暂存区 -> git仓库


/*
    ?? 表示当前文件未被追踪的意思
    tab键 可以自动补全路径
    U 表示未追踪的
    A 表示文件已处于追踪文件
    M 表示当前文件已经被修改了
    绿色M：表示文件已修改且放入暂存区
    红色M：表示文件已修改但没放入暂存区
*/



// 1、本地生成一个仓库：git init
// 2、查看当前文件状态：git status
// 3、查看状态精简命令：git status -s
// 4、添加文件被git所管理：git add 文件名
// 5、一次性添加多个文件到暂存区：git add .
// 6、添加文件到暂存区：git commit -m '描述信息'
// 7、跳过使用暂存区(用的比较多)：git commit -a -m '描述信息'      就是git add 和git commit的复合写法


/* 
    生成仓库的两种方式
    1、git init
    2、git clone 远程仓库地址
*/


/*
    add命令的作用：
    1、可以添加新加的文件
    2、文件做了修改之后，本地提交之前还需要add一下
    3、多人合并代码之后，解决冲突之后，提交之前，还需要add一下
*/




/*
    命令：
    1、撤销：git checkout -- 文件名
    2、取消暂存文件(了解)：git reset HEAD 文件名
    3、取消所有暂存文件：git reset HEAD .
    4、移除文件(git仓库和工作区)：git rm -f 文件名
    5、移除文件(git仓库)：git rm --cached 文件名
    6、查看本地工程关联的远程仓库是哪个：git remote -v
    7、添加忽略文件：.gitignore
    8、查看提交记录：git log
    9、回退到之前的指定版本：git reset --hard <CommitID>
    10、在旧版本中查看命令操作的历史：git reflog --pretty=oneline
    11、克隆：git clone 远程仓库地址
    12、查看当前分支列表：git branch
    13、创建新分支：git branch 分支名称（小写字母，不要中文）
    14、切换当前所属分支：git checkout 分支名称
    15、创建+切换分支：git checkout -b 分支名称
    16、合并分支：git checkout master（先切换到主分支）
                 git merge login（再合并）
    17、删除分支：git branch -d 分支名称（不能删除自己所在的这个分支）
    18、遇到冲突时的分支合并：手动调试后
        git add .
        git commit -m '解决了分支合并冲突的问题'

*/



/*
    步骤：
    1、生成仓库：git init
    2、添加文件被git管理：git add 文件名 \  git add .
    3、查看文件状态：git status -s
    4、提交文件：git commit -m '描述信息'
    5、上传到github\gitee
    6、再次提交：git push
*/

/*
    github：
    1、git remote add origin https://github.com/zzzzzzk77/project_01.git（使用来关联本地仓库和远程仓库的）
        remote：表示远程的意思
        origin：就是后面git仓库的别名
        远程仓库的地址：https://github.com/zzzzzzk77/project_01.git

    2、git branch -M main
        把默认的master分支名称改成了main

    3、git push -u origin main
        表示第一次本地仓库朝远程仓库提交，必须这么写
        push：表示推送的意思
        -u：表示第一次推送的时候，必须添加 -u 参数
        origin：表示你要把工程往哪推，这个名字代表的地址就是你要推送的地址
        main：表示上面那个地址所有的某一点（房间，分支）
        后面修改完代码，再次提交时，只需要走 git push

    
    使用 https 协议去推送的时候，可能出现的问题
    1、正常会弹出账户和密码的输入框（只有一次机会）
        如果输入错误，需要自行去控制面板\用户账户\凭据管理器，把对应网站里面记录的登录信息移除掉

    2、账户和密码正确的前提下，还需要生成一个个人的登录 token
        git remote remove origin
*/


/*
    码云：
    1、cd xxx 表示进入某个文件
    2、cd .. 回到上一级
*/