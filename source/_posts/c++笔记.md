---
abbrlink: ''
categories: []
date: '2026-03-21T17:29:28.816210+08:00'
tags: []
title: c++笔记
updated: '2026-03-21T17:29:56.115+08:00'
---
```markdown
# ASCII码表

## 基础代码
```cpp
#include <iostream>
using namespace std;

int main() 
{
    cout << "Hello World!";
}
```

## 开平方

`sqrt(数字)`
需包含数学库：`#include <cmath>`
参考链接：[C++ cmath库](https://www.runoob.com/cplusplus/cpp-libs-cmath.html)

## 格式化输出

在C语言中，使用`printf`函数可以格式化输出浮点数，保留指定的小数位数。如果要保留两位小数，可以使用`%.2f`格式说明符。

```c
#include <stdio.h>

int main() {
    double num = 3.14159;
    printf("%.2f\n", num); // 输出: 3.14
    return 0;
}
```

**注意事项**

- `printf`函数中的`%.2f`表示输出的浮点数将保留两位小数。
- 如果小数部分第三位数字大于或等于5，则会进行四舍五入。

**示例代码**

```c
#include <stdio.h>

int main() {
    double value = 123.4567;
    printf("原始值: %f\n", value);   // 输出: 原始值: 123.456700
    printf("保留两位小数: %.2f\n", value); // 输出: 保留两位小数: 123.46
    return 0;
}
```

## 一维数组

```cpp
int main()
{
    int a[5] = { 0 };           // 将所有元素赋值为0
    int b[5] = { 0 };           // 将第一个元素赋值为1，其余值为0（注释可能有误，实际第一个元素为1？）
    int c[5] = { 0,1,2,3,4 };   // 将数组中的每个元素分别赋值
    int c[] = { 0,1,2,3,4 };    // 将数组中的每个元素分别赋值
    for (int i = 0; i < 5; i++) { // 循环将每个数据赋值为0
        a[i] = -1;
    }
    for (int i = 0; i < 5; i++) { // 循环输出
        printf("%d", a[i]);
    }
}
```

## 快速排序

```cpp
#include<algorithm>
sort(a + 1, a + 1 + n); // 从下标为1开始快速排序
```

## 二维数组

```cpp
int a[2][3] = {0};                   // 对全部元素初始化为0
int b[2][3] = {1,2,3,4,5,6};         // 对全部数组元素初始化为1至6
int c[2][3] = {{1},{4}};             // 对部分元素初始化，未初始化的元素为0
int d[2][3] = {{1,2},{5}};           // 对数组第一维的前两个元素初始化为1和2
                                     // 第二维的前一个元素初始化为5，其他为0
```

**输出**

```cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
    int a[105][105], n, m;
    cin >> n >> m;               // 输入n行m列
    for (int i = 1; i <= n; i++) {       // 循环第i行
        for(int j = 1; j <= m; j++) {    // 循环第j列
            cin >> a[i][j];
        }
    }
    for (int i = 1; i <= n; i++) {       // 循环第i行
        for(int j = 1; j <= m; j++) {    // 循环第j列
            cout << a[i][j] << " ";
        }
        cout << endl;            // 一行结束后换行
    }
}
```

## 字符数组

在初始化时可以直接将整个字符串初始化给字符数组。但是不能用`=`赋值语句字符串赋值给字符数组。（声明时`=`为初始化，其他时候为赋值）

```cpp
#include <cstdio>
using namespace std;
int main()
{
    char str1[20] = "34225553w5643";   // 将str1[]初始化为对应的字符串
    char str2[20] = { 0 };              // 将str2[]中所有元素初始化为0
    char str3[20];
    for(int i = 0; i < 10; i++) {
        str3[i] = 'a';                  // 将str3[]中前10个元素初始化为字符'a'
    }
}
```

字符数组和字符串的主要区别在于是否使用了字符串结束标志`\0`。字符数组中的元素可以是任意字符，并不要求最后一个元素是`\0`。但是，当字符数组被用作字符串时，就必须以`\0`结尾。

### 字符数组输入

```cpp
#include <bits/stdc++.h>
using namespace std;
int main()
{
    char str[105];
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {   // 循环输入n个字符
        cin >> str;                 // scanf("%c", &str[i]);
    }
    for (int i = 0; i < n; i++) {   // 循环输出n个字符
        cout << str[i];             // printf("%c", str[i]);
    }
}
```

- `cin >> str[i];`     // 输入单个字符时会忽略空格和换行符
- `scanf("%c", &str[i]);` // 输入单个字符时不会忽略空格和换行符
- `str[i] = getchar();`   // 输入单个字符时不会忽略空格和换行符

### 字符数组 cin 和 cout

**第一种**

```cpp
#include <iostream>
using namespace std;
int main()
{
    char str[105];
    cin >> str;
    cout << str;   // 输出遇到'\0'停止
    return 0;
}
```

**第二种**

```cpp
#include <iostream>
using namespace std;
int main()
{
    char str[105];
    cin.getline(str, 100);
    cout << str;   // 输出遇到'\0'停止
    return 0;
}
```

对两个程序都输入 `I love c++`

- `cin >> str;`          // 输入字符串时读取到空格或换行符为止
- `cin.getline(str, 100);` // 输入100个字符或遇到换行符为止
- `cin.getline(str, 100, 'a');` // 输入100个字符或遇到指定字符('a')为止（换行符不会停止输入）

因此左侧程序输出 `I`，右侧程序输出 `I love c++`。

## 字符串相关函数

（此处内容缺失）

## 字符串

```cpp
#include <iostream>
#include <string>
using namespace std;
int main()
{
    string str1;       // 声明一条空字符串
    string str2[105];  // 声明一个字符串数组（声明105条字符串str2[]）
}
```

## 函数定义

```cpp
返回类型 函数名(参数表){
    语句a;
    语句b;
    …………
    语句n;
}
```

## cin 和 cout 优化

```cpp
// cin和cout优化
ios::sync_with_stdio(0);   // 取消同步
cin.tie(0), cout.tie(0);   // 加速输入输出
```

## 快读

```cpp
#include <ctype.h>   // 需要包含此头文件以使用 isdigit() 函数

/**
 * 快速读入一个 long long 整数。
 * 自动跳过前导空白字符（空格、换行等），正确处理负号，
 * 遇到非数字字符时停止读取。
 *
 * 返回值：读取到的整数（long long 类型）。
 */
long long read() {
    long long x = 0;   // 用于累加数字部分的值
    short f = 1;       // 符号标志，1 表示正数，-1 表示负数
    char ch;           // 当前读取的字符

    ch = getchar();    // 读取第一个字符

    // 跳过所有非数字字符（如空格、换行、字母等），同时检测负号
    while (!isdigit(ch)) {
        if (ch == '-') {   // 若遇到负号，标记为负数
            f = -1;
        }
        ch = getchar();    // 继续读取下一个字符
    }

    // 此时 ch 已经是数字字符，开始将连续的数字字符转换为整数
    while (isdigit(ch)) {
        // 将当前数字字符（'0'~'9'）转换为数值并累加
        // ch - '0' 得到字符对应的整数值
        x = x * 10 + (ch - '0');
        ch = getchar();    // 读取下一个字符
    }

    // 返回带符号的结果
    return x * f;
}
```

```

```
