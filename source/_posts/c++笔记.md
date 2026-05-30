---
abbrlink: ''
categories: []
cover: https://img.246644.xyz/1000123948.jpg
date: ''
tags: []
title: c++笔记
updated: '2026-05-30T16:47:35.162+08:00'
---
# C++ 学习笔记

## ASCII 码表

### 1. ASCII 可显示字符表

| 十进制 | 十六进制 | 字符   | 十进制 | 十六进制 | 字符 |
| ------ | -------- | ------ | ------ | -------- | ---- |
| 32     | 20       | (空格) | 80     | 50       | P    |
| 33     | 21       | !      | 81     | 51       | Q    |
| 34     | 22       | "      | 82     | 52       | R    |
| 35     | 23       | #      | 83     | 53       | S    |
| 36     | 24       | $      | 84     | 54       | T    |
| 37     | 25       | %      | 85     | 55       | U    |
| 38     | 26       | &      | 86     | 56       | V    |
| 39     | 27       | '      | 87     | 57       | W    |
| 40     | 28       | (      | 88     | 58       | X    |
| 41     | 29       | )      | 89     | 59       | Y    |
| 42     | 2A       | *      | 90     | 5A       | Z    |
| 43     | 2B       | +      | 91     | 5B       | [    |
| 44     | 2C       | ,      | 92     | 5C       | \\   |
| 45     | 2D       | -      | 93     | 5D       | ]    |
| 46     | 2E       | .      | 94     | 5E       | ^    |
| 47     | 2F       | /      | 95     | 5F       | _    |
| 48     | 30       | 0      | 96     | 60       | `    |
| 49     | 31       | 1      | 97     | 61       | a    |
| 50     | 32       | 2      | 98     | 62       | b    |
| 51     | 33       | 3      | 99     | 63       | c    |
| 52     | 34       | 4      | 100    | 64       | d    |
| 53     | 35       | 5      | 101    | 65       | e    |
| 54     | 36       | 6      | 102    | 66       | f    |
| 55     | 37       | 7      | 103    | 67       | g    |
| 56     | 38       | 8      | 104    | 68       | h    |
| 57     | 39       | 9      | 105    | 69       | i    |
| 58     | 3A       | :      | 106    | 6A       | j    |
| 59     | 3B       | ;      | 107    | 6B       | k    |
| 60     | 3C       | <      | 108    | 6C       | l    |
| 61     | 3D       | =      | 109    | 6D       | m    |
| 62     | 3E       | >      | 110    | 6E       | n    |
| 63     | 3F       | ?      | 111    | 6F       | o    |
| 64     | 40       | @      | 112    | 70       | p    |
| 65     | 41       | A      | 113    | 71       | q    |
| 66     | 42       | B      | 114    | 72       | r    |
| 67     | 43       | C      | 115    | 73       | s    |
| 68     | 44       | D      | 116    | 74       | t    |
| 69     | 45       | E      | 117    | 75       | u    |
| 70     | 46       | F      | 118    | 76       | v    |
| 71     | 47       | G      | 119    | 77       | w    |
| 72     | 48       | H      | 120    | 78       | x    |
| 73     | 49       | I      | 121    | 79       | y    |
| 74     | 4A       | J      | 122    | 7A       | z    |
| 75     | 4B       | K      | 123    | 7B       | {    |
| 76     | 4C       | L      | 124    | 7C       | \|   |
| 77     | 4D       | M      | 125    | 7D       | }    |
| 78     | 4E       | N      | 126    | 7E       | ~    |
| 79     | 4F       | O      |        |          |      |

---

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

### 2. string 成员函数（一）

| 函数/操作               | 用法                           | 说明                                                            |
| ----------------------- | ------------------------------ | --------------------------------------------------------------- |
| `[]`                    | `str[i]`                       | 访问下标为`i` 的元素，下标从 0 开始                             |
| `=`                     | `str = "I love C++.";`         | 将字符串赋值为`"I love C++."`                                   |
| `+`                     | `str = str1 + str2;`           | 将`str1` 与 `str2` 拼接后赋值给 `str`                           |
| `>、<、==` 等           | `bool res = str1 > str2;`      | 按字典序比较字符串大小                                          |
| `.size()` / `.length()` | `int len = str.size();`        | 获取字符串长度                                                  |
| `.empty()`              | `str.empty();`                 | 判断是否为空串，返回`true/false`                                |
| `.clear()`              | `str.clear();`                 | 清空字符串全部内容                                              |
| `.find()`               | `int id = str.find(str2, i);`  | 从下标`i` 向右查找 `str2` 首次出现的位置，未找到返回 `str.npos` |
| `.rfind()`              | `int id = str.rfind(str2, i);` | 从下标`i` 向左查找 `str2` 首次出现的位置，未找到返回 `str.npos` |
| `.insert()`             | `str1.insert(i, str2);`        | 在下标为`i` 的元素前插入字符串 `str2`                           |
| `.substr()`             | `str2 = str1.substr(i, n);`    | 提取`str1` 中从 `i` 开始的 `n` 个字符子串                       |
| `.erase()`              | `str.erase(i, n);`             | 删除从下标`i` 开始的 `n` 个字符                                 |
| `.replace()`            | `str1.replace(i, n, str2);`    | 用`str2` 替换 `str1` 中从 `i` 开始的 `n` 个字符                 |

---

### 3. string 成员函数（二）

| 函数/操作     | 用法                               | 说明                                             |
| ------------- | ---------------------------------- | ------------------------------------------------ |
| `.begin()`    | `char ch = *str.begin();`          | 获取起始迭代器指向的字符                         |
| `.end()`      | `char ch = *(str.end() - 1);`      | 获取末尾迭代器前一个位置的字符（最后一个字符）   |
| `.rbegin()`   | `char ch = *str.rbegin();`         | 获取反向起始迭代器指向的字符（最后一个字符）     |
| `.rend()`     | `char ch = *(str.rend() - 1);`     | 获取反向末尾迭代器前一个位置的字符（第一个字符） |
| `to_string()` | `string str = to_string(x);`       | 将整型`x` 转换为字符串                           |
| `stoi()`      | `int x = stoi(str);`               | 将字符串转换为整型（也可转为实数）               |
| `stoll()`     | `long long x = stoll(str);`        | 将字符串转换为`long long` 整型                   |
| `sort()`      | `sort(str.begin(), str.end());`    | 将字符串中字符按字典序升序排序，需`#include`     |
| `reverse()`   | `reverse(str.begin(), str.end());` | 反转字符串中的字符顺序，需`#include`             |

---

### 4. 字符数组函数

使用时需包含头文件 `#include<cstring>`。

| 函数     | 用法                            | 说明                                                                  |
| -------- | ------------------------------- | --------------------------------------------------------------------- |
| `strlen` | `int len = strlen(str);`        | 获取字符串`str` 的长度                                                |
| `strcpy` | `strcpy(str1, str2);`           | 将`str2` 复制到 `str1`                                                |
| `strcat` | `strcat(str1, str2);`           | 将`str2` 拼接到 `str1` 末尾                                           |
| `strcmp` | `int res = strcmp(str1, str2);` | 逐字符比较 ASCII 码，`str1 > str2` 返回正数，相等返回 0，小于返回负数 |
| `strstr` | `strstr(str, tmp);`             | 在`str` 中查找 `tmp` 首次出现的位置，返回地址                         |
| `memset` | `memset(str, 0, sizeof str);`   | 将指定值填充到内存区域的前`n` 个字节                                  |
| `memcpy` | `memcpy(str1, str2, n);`        | 将`str2` 前 `n` 个字节复制到 `str1`                                   |
| `memcmp` | `memcmp(str1, str2, n);`        | 比较`str1` 与 `str2` 前 `n` 个字节，返回值含义同 `strcmp`             |

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

## 结构体

### 示例代码

```cpp
#include <iostream>
using namespace std;
struct Person {
    string name;
    int ch, ma, en, idx;
    int sum() {
        return ch + ma + en;
	}
};
int main()
{
    Person a;
	a.name = "张三";
	a.ch = 90;
	a.ma = 80;
	a.en = 70;
	a.idx = 114;
}
```

### T363427 【模板】多数据排序

#### 题目

##### 题目描述

输入 $n$ 个学生的姓名以及语文、数学成绩，按总分总从高到低排序，总分相同时按学号从小到大排序，学号为输入时的次序从 $1$ 开始。

##### 输入格式

第一行，输入正整数 $n，n∈[3,1000]$。

接下来 $n$ 行，输入学生的姓名、语文和数学成绩。

##### 输出格式

按题目要求输出学生的姓名、总分以空格隔开每个学生的信息占一行。

##### 输入输出样例 #1

###### 输入 #1

```
3
liubei 90 80
guanyu 80 80
zhangfei 85 85
```

###### 输出 #1

```
liubei 170
zhangfei 170
guanyu 160
```

##### 说明/提示

名字不含空格长度小于20，成绩满分为100。

#### 代码

```cpp
#include <iostream>
#include <algorithm>
#include <string>
using namespace std;
struct Person {
	string name;
	int ch, ma, id;
	int sum() {
		return ch + ma;
	}
}a[1005];
bool cmp(Person a, Person b) {
	if (a.sum() == b.sum()) {
		return a.id < b.id;
	}
	else {
		return a.sum() > b.sum();
	}
}
int main() {
	int n;
	cin >> n;
	for (int i = 1; i <= n; i++) {
		cin >> a[i].name >> a[i].ch >> a[i].ma;
		a[i].id = i;
	}
	//快速排序
	sort(a + 1, a + 1 + n, cmp);
	//输出
	for (int i = 1; i <= n; i++) {
		cout << a[i].name << " " << a[i].sum() << endl;
	}
	return 0;
}
```



