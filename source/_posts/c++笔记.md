---
abbrlink: ''
categories: []
cover: https://img.246644.xyz/1000123948.jpg
date: ''
tags: []
title: c++笔记
updated: '2026-04-25T17:52:08.605+08:00'
---
# C++ 学习笔记

## ASCII 码表

（待补充）

---

## 基础代码

```cpp
#include <iostream>
using namespace std;

int main() 
{
    cout << "Hello World!";
}
```

## 数学库与开平方

```cpp
#include <cmath>   // 数学库
// 参考：https://www.runoob.com/cplusplus/cpp-libs-cmath.html

// 开平方：sqrt(数字)
double result = sqrt(16.0);
```

## 格式化输出

### 保留两位小数

在C语言中，使用 `printf` 函数可以格式化输出浮点数，保留指定的小数位数。保留两位小数可使用 `%.2f` 格式说明符。

```cpp
#include <stdio.h>

int main() {
    double num = 3.14159;
    printf("%.2f\n", num); // 输出: 3.14
    return 0;
}
```

**注意事项：**

- `printf` 中的 `%.2f` 表示输出的浮点数保留两位小数。
- 如果小数部分第三位数字大于或等于5，则会进行四舍五入。

**示例代码：**

```cpp
#include <stdio.h>

int main() {
    double value = 123.4567;
    printf("原始值: %f\n", value);       // 输出: 原始值: 123.456700
    printf("保留两位小数: %.2f\n", value); // 输出: 保留两位小数: 123.46
    return 0;
}
```

---

## 数组

### 一维数组

```cpp
int main()
{
    int a[5] = { 0 };           // 将所有元素赋值为0
    int b[5] = { 1 };           // 将第一个元素赋值为1，其余值为0
    int c[5] = { 0,1,2,3,4 };  // 将数组中的每个元素分别赋值
    int d[]  = { 0,1,2,3,4 };  // 自动推导长度，将数组中的每个元素分别赋值

    for (int i = 0; i < 5; i++) {
        a[i] = -1;              // 循环将每个数据赋值为-1
    }
    for (int i = 0; i < 5; i++) {
        printf("%d", a[i]);     // 循环输出
    }
}
```

### 快速排序

```cpp
#include <algorithm>
sort(a + 1, a + 1 + n);  // 从下标为1的元素开始快速排序（n为元素个数）
```

### 二维数组

```cpp
int a[2][3] = {0};                // 对全部元素初始化为0
int b[2][3] = {1,2,3,4,5,6};     // 按行优先对所有元素初始化

int c[2][3] = {{1},{4}};          // 按行部分初始化，未指定元素为0
int d[2][3] = {{1,2},{5}};        // 第一行前两个为1,2；第二行第一个为5，其余为0
```

**二维数组输入输出示例：**

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    int a[105][105], n, m;
    cin >> n >> m;                  // 输入n行m列

    for (int i = 1; i <= n; i++) {         // 循环第i行
        for (int j = 1; j <= m; j++) {     // 循环第j列
            cin >> a[i][j];
        }
    }

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= m; j++) {
            cout << a[i][j] << " ";
        }
        cout << endl;                     // 一行结束换行
    }
}
```

---

## 字符数组与字符串

### 字符数组初始化

初始化时可以直接将整个字符串字面量赋给字符数组。但声明之后的“赋值”不能使用 `=` 直接赋值整个字符串。（声明时 `=` 为初始化，其他时候为赋值）

```cpp
#include <cstdio>
using namespace std;

int main()
{
    char str1[20] = "34225553w5643";  // 用字符串字面量初始化
    char str2[20] = { 0 };            // 所有元素初始化为0（即 '\0'）
    char str3[20];
    for (int i = 0; i < 10; i++) {
        str3[i] = 'a';                // 前10个元素赋值为字符 'a'
    }
}
```

**字符数组与字符串的区别：**
字符数组和字符串的主要区别在于是否使用了字符串结束标志 `'\0'`。字符数组中的元素可以是任意字符，并不要求最后一个元素是 `'\0'`。但是，当字符数组被用作字符串时，就必须以 `'\0'` 结尾。

### 字符数组的输入

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
    char str[105];
    int n;
    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> str[i];               // 输入单个字符（会忽略空格和换行符）
        // 或 scanf("%c", &str[i]); // 不会忽略空格和换行符
        // 或 str[i] = getchar();   // 不会忽略空格和换行符
    }
    for (int i = 0; i < n; i++) {
        cout << str[i];
    }
}
```

- `cin >> str[i];` 输入单个字符时会忽略空格和换行符。
- `scanf("%c", &str[i]);` 输入单个字符时不会忽略空格和换行符。
- `str[i] = getchar();` 输入单个字符时不会忽略空格和换行符。

### 字符数组整体输入（cin 与 cin.getline）

**第一种：**

```cpp
#include <iostream>
using namespace std;

int main()
{
    char str[105];
    cin >> str;       // 读取直到空格或换行符
    cout << str;      // 输出遇到 '\0' 停止
    return 0;
}
```

**第二种：**

```cpp
#include <iostream>
using namespace std;

int main()
{
    char str[105];
    cin.getline(str, 100);       // 最多读99个字符或遇到换行符停止
    cout << str;
    return 0;
}
```

**对比（输入 "I love c++"）：**

- `cin >> str;` → 读取到空格为止，输出 `I`
- `cin.getline(str, 100);` → 读取整行（遇到换行符停止），输出 `I love c++`
- `cin.getline(str, 100, 'a');` → 读取最多99个字符或遇到字符 `'a'` 为止（此时换行符不会停止输入）

### 字符串相关函数

（待补充）

---

## C++ string 类型

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string str1;              // 声明一个空字符串
    string str2[105];         // 声明一个字符串数组（包含 105 个 string 对象）
}
```

**带空格的字符串输入：**

```cpp
getline(cin, a);  // 将一行输入（可含空格）存入字符串变量 a
```

---

## 函数定义

```cpp
返回类型 函数名(参数表) {
    语句a;
    语句b;
    …………
    语句n;
}
```

---

## cin / cout 优化

```cpp
ios::sync_with_stdio(0);    // 取消与 stdio 的同步
cin.tie(0), cout.tie(0);    // 加速输入输出
```
