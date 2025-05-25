#include <bits/stdc++.h>
using namespace std;

int main() {
  int N, S;
  cin >> N >> S;
  vector<int> A(N), P(N);
  for (int i = 0; i < N; i++) {
    cin >> A.at(i);
  }
  for (int i = 0; i < N; i++) {
    cin >> P.at(i);
  }

  // リンゴ・パイナップルをそれぞれ1つずつ購入するとき合計S円になるような買い方が何通りあるか
  // ここにプログラムを追記
  int count = 0;

  for (int A_i = 0; A_i < N; A_i++) {
    for (int P_i = 0; P_i < N; P_i++) {
      if (A.at(A_i) + P.at(P_i) == S) count++;
    }
  }

  cout << count << endl;
}
