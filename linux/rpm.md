# rpm

Red Hat开发的一种包管理工具。

### 创建rpm

rpm创建步骤：
1. 按照rpmbuild规范创建一个目录；
2. 将源代码和附带文件放在目录中合适的位置；
3. 创建`spec`文件；
4. 编译rpm。


#### 目录结构

包含五个子目录：`BUILD`, `RPMS`, `SOURCES`, `SPECS`和`SRPMS`

```bash
cd ~ # 切换到想要创建rpmbuild目录的地方

mkdir rpmbuild

cd rpmbuild

mkdir BUILD RPMS SOURCES SPECS SRPMS

```


#### spec文件

在`SPECS`中创建`.spec`文件。

```bash
# This is a simple spec file for lighttpd
%define _topdir /home/jagen/rpmbuild
Name: lighttpd
Version: 1.4.32
Release: 1%{?dist}
Summary: A light http server
License: BSD
URL: http://www.lighttpd.net/
Source0: %{name}-%{version}.tar.gz
Group: Development/Tools
Prefix: /usr/local
BuildRoot:%{_topdir}/BUILDROOT/%{name}-%{version}-%{release}%{?dist}.%{_arch}
BuildRequires: pcre-devel>= 8
Requires: pcre>= 8
%description
Lighttpd is a secure,fast,compliant,and very flexible
web-server that has been optimized for high-performance environments.
%prep
%setup -q
%build
./configure --prefix=%{prefix} --libdir=%{prefix}/lib64
make %{?_smp_mflags}
%install
rm -rf $RPM_BUILD_ROOT
make install DESTDIR=$RPM_BUILD_ROOT
%files
%defattr(-,root,root,-)
%{prefix}/sbin/lighttpd
%{prefix}/sbin/lighttpd-angel
%{prefix}/lib64/*.so
%{prefix}/lib64/*.la
%{prefix}/share/man/man8/lighttpd.8
```

注释的格式#加上空格，空格必须存在。
```bash
# This is a simple spec file for lighttpd
```

定义变量（？）：
```bash
_topdir /home/jagen/rpmbuild
```

引用变量：
```bash
%{_topdir}  # 如果变量不存在，就会使用%{_topdir}显示在变量的位置
%{?_topdir} # 可以带上？来实现如果变量不存在，就使用空值。
```


spec文件大体上分为：
* 定义段
  - `_topdir` 这个是内部提供的变量；
  - `name: value`是rpm包的基本信息，这些基本信息可以当做变量来引用，标签的`name`不区分大小写，但当做变量来引用的时候，变量名必须是小写， 但有些必须是全部大写.比如`Source`标签需要使用`%{SOURCE}`来引用。
    * 标签名不能乱写，必须是rpm定义的。
    * `Source`：
    * `BuildRoot`：使用`$RPM_BUILD_ROOT`引用。
* 描述段
* 预处理段
* 构建段
* 安装段
* `%pre`, 可以在安装之前执行脚本
* `%post`,可以在安装之后执行脚本
* `%preun`,可以在uninstall之前执行脚本
* `%postun`,可以在uninstall之后执行脚本
