#include <bits/stdc++.h>
using namespace std;

int main() {
  vector<int> data(5);
  for (int i = 0; i < 5; i++) {
    cin >> data.at(i);
  }

  // dataの中で隣り合う等しい要素が存在するなら"YES"を出力し、そうでなければ"NO"を出力する
  // ここにプログラムを追記

  // ループを使わないで書く
  // if (data.at(0) == data.at(1) || data.at(1) == data.at(2) || data.at(2) == data.at(3) || data.at(3) == data.at(4)) {
  //   cout << "YES" << endl;
  // }
  // else {
  //   cout << "NO" << endl;
  // }

  // パターンを見つける
  // bool flag = false;

  // if (data.at(0) == data.at(1)) flag = true;
  // if (data.at(1) == data.at(2)) flag = true;
  // if (data.at(2) == data.at(3)) flag = true;
  // if (data.at(3) == data.at(4)) flag = true;

  // if (flag) {
  //   cout << "YES" << endl;
  // } else {
  //   cout << "NO" << endl;
  // }

  // ループで書き直す
  bool flag = false;

  for (int i = 1; i < data.size(); i++) {
    if (data.at(i-1) == data.at(i)) flag = true;
  }

  if (flag) {
    cout << "YES" << endl;
  } else {
    cout << "NO" << endl;
  }
}
