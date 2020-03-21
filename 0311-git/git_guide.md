## **主要**

#### 基础篇

###### 1.Git Commit

```bash
git commit
git commit
```

###### 2.Git Branch

```bash
git branch bugFix
git checkout bugFix
```

###### 3.Git Merge

```bash
git checkout -b bugFix
git commit
git checkout master
git commit
git merge bugFix
```

###### 4.Git Rebase

```bash
git checkout -b bugFix
git commit
git checkout master
git commit
git checkout bugFix
git rebase master
```

#### 高级篇

###### 1.分离 Head

```bash
git checkout c4
```

2.相对引用 ^
 最优解：

```bash
git checkout bugFix^
```

###### 3.相对引用2 ~

```bash
git branch -f master c6
git branch -f bugFix c0
git checkout c1
```

###### 4.撤销变更

```bash
git reset HEAD^
git checkout pushed
git revert HEAD
```

#### 移动提交记录

##### 1.Git Cherry-pick

```bash
git cherry-pick c3 c5 c7
```

##### 2.交互式 rebase

```bash
git rebase -i HEAD~4
```

#### 移动提交记录

##### 1.只提取一个提交记录

```bash
git rebase -i HEAD~3
git branch -f master bugFix
```

##### 2.提交的技巧 #1

```bash
git rebase -i HEAD~2 #修改C2和C3的顺序
git commit --amend
git rebase -i HEAD~2 #修改C3'和C2''顺序
git branch -f master
```

##### 3.提交的技巧 #2

```bash
git checkout master
git cherry-pick newImage
git commit --amend
git cherry-pick caption
```

##### 4.Git Tag

```bash
git tag v0 c1
git tag v1 c2
git checkout c2
```

##### 5.Git Describe

```bash
git commit
```

#### 高级话题

##### 1.多次 Rebase

```bash
git rebase master bugFix
git rebase bugFix side
git rebase side another
git branch -f master another
```

##### 2.两个父节点

```bash
git branch bugWork HEAD~^2~
```

##### 3.纠缠不清的分支

```bash
git checkout one
git cherry-pick c4 c3 c2
git checkout two
git cherry-pick c5 c4 c3 c2
git branch -f three c2
```

```bash
show solution
```

------

## **远程**

#### Push & Pull —— Git 远程仓库

###### 1.Git Clone

```bash
git clone
```

###### 2.远程分支

```bash
git commit
git checkout o/master
git commit
```

###### 3.Git Fetch

```bash
git fetch
```

###### 4.Git Pull

```bash
git pull
```

###### 5.fakeTeamwork

```bash
git clone
git fakeTeamwork 2
git commit
git pull
```

###### 6.Git Push

```bash
git commit
git commit 
git push
```

###### 7.

```bash
git clone
git fakeTeamwork 1
git commit
git pull --rebase
git push
```

###### 8.

```bash
git reset --hard o/master
git checkout -b feature C2
git push origin feature
```

#### Git 远程仓库高级操作

###### 1.推送主分支

```bash
git fetch
git rebase o/master side1
git rebase side1 side2
git rebase side2 side3
git rebase side3 master
git push
```

###### 2.合并远程仓库

```bash
git checkout master
git pull origin master
git merge side1
git merge side2
git merge side3
git push origin master
```

###### 3.远程追踪

```bash
git checkout -b side o/master
git commit
git pull --rebase
git push
```

###### 3.远程追踪

```bash
git branch -f side master
git commit
git pull --rebase
git push
```

###### 4.Git Push的参数

```bash
git push origin master
git push origin foo
```

###### 5.Git Push的参数 2

```bash
git push origin foo:master
git push origin master^:foo
```

###### 6.Git Fetch的参数

```bash
git fetch origin master^:foo
git fetch origin foo:master
git checkout foo
git merge master
```

###### 7.source

```bash
git pull origin :bar
git push origin :foo
```

###### 8.Git Pull参数

```bash
git pull origin bar:foo
git pull origin master:side
```