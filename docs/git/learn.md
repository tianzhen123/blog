##git

###常用
1. git 删除本地分支：git branch -D [branch_name]
2. git 删除远程分支：git push origin --delete [branch_name]
3. git 把本地分支推送到远程：git push --set-upstream origin new_branch
4. git 取消合并：git reset --hard HEAD
5. git 撤销本地commit：git reset --soft HEAD^
6. git 更新本地分支：git remote update origin --prune
7. git 远程前置覆盖本地：git fetch --all && git reset --hard origin/[branch_name] && git pull
8. git 回滚到某个版本：git reset --hard [branch_version]
9. git 把本地强制覆盖到远程：git push -f -u origin [branch_name]
10. Git 拉取某一次提交的代码版本到本地分支：git checkout -b 分之名 远程仓库的commitId
###Git暂存管理
1. git stash                        # 暂存  
2. git stash list                   # 列所有stash  
3. git stash apply                  # 恢复暂存的内容  
4. git stash drop                   # 删除暂存区  
###Git远程分支管理
1. git pull                         # 抓取远程仓库所有分支更新并合并到本地
2.  git pull --no-ff                 # 抓取远程仓库所有分支更新并合并到本地，不要快进合并
3. git fetch origin                 # 抓取远程仓库更新
4. git merge origin/master          # 将远程主分支合并到本地当前分支
5. git co --track origin/branch     # 跟踪某个远程分支创建相应的本地分支
6. git co -b <local_branch> origin/<remote_branch>  # 基于远程分支创建本地分支，功能同上
7. git push                         # push所有分支
8. git push origin master           # 将本地主分支推到远程主分支
9. git push -u origin master        # 将本地主分支推到远程(如无远程主分支则创建，用于初始化远程仓库)
10. git push origin <local_branch>   # 创建远程分支， origin是远程仓库名
11. git push origin <local_branch>:<remote_branch>  # 创建远程分支
12. git push origin :<remote_branch>  #先删除本地分支(git br -d )，然后再push删除远程分支

###git 提交
####用commitlint规范团队的git提交信息
在一个团队中，每个人的git的commit信息都不一样，五花八门，没有一个机制很难保证规范化，如何才能规范化呢？可能你想到的是git的hook机制，去写shell脚本去实现。这当然可以，其实JavaScript有一个很好的工具可以实现这个模板，它就是commitlint。
接下来将会讲解如何一步步的使用commitlint。
一般情况下，commitlint会用在git的hook回调中，最简单的就是和 husky一起使用。
前提条件是工程是通过git管理的，如果没有先自己创建一个demo工程，用git初始化一下。
比如创建一个commitlint-test工程：


mkdir commitlint-test cd commitlint-test git init
npm 工程初始化


npm init
安装commitlint
###安装依赖


npm install --save-dev @commitlint/{cli,config-conventional}
在工程更目录添加配置文件commitlint.config.js


echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
commitlint.config.js文件内容如下：


module.exports = {     extends: ['@commitlint/config-conventional'], };
extends字段表示扩展子@commitlint/config-conventional的配置。一般扩展这个就足够了，这是利用的commitlint的配置宽展机制，可以继承其他人的配置。
###安装husky
husky是一个git hook的管理工具，实现了大部分的git hook，有兴趣的可以自行google。
npm install --save-dev husky
在package.json中配置husky. hooks
// package.json {   "husky": {     "hooks": {       "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"     }     } }
通过HUSKY_GIT_PARAMS传递参数，-E|--env用于指向相关的编辑文件。
###测试
如果不符合规则，讲无法使用git进行commit，比如下面的，如果想知道有什么规则，可以继续往下看。
git commit -m "foo: this will fail" husky > npm run -s commitmsg ⧗   input: foo: this will fail ✖   type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum] ✖   found 1 problems, 0 warnings husky > commit-msg hook failed (add --no-verify to bypass) git commit -m "chore: lint on commitmsg" husky > npm run -s commitmsg ⧗   input: chore: lint on commitmsg ✔   found 0 problems, 0 warnings
###规则
git commit的消息这样组成：
其中header是必须有的，body，footer可选。


header  --空一行 body --空一行 footer
header的规则
Commit message格式，注意冒号后面有空格
<type>: <subject>
type
用于说明 commit 的类别，只允许使用下面7个标识，也可以自己在配置文件中更改或者扩展。
标准类型如下：
feat：新功能（feature）
fix：修补bug
docs：文档（documentation）
style： 格式方面的优化
refactor：重构
test：测试
chore：构建过程或辅助工具的变动
subject
subject是 commit 目的的简短描述，不能超过50个字符，且结尾不加英文句号。
如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。
参考：
https://conventional-changelog.github.io/commitlint/#/
https://conventional-changelog.github.io/commitlint/#/reference-rules


链接：https://www.jianshu.com/p/8efa36c5dfd4