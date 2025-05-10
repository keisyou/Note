#include <bits/stdc++.h>
using namespace std;

int main() {
  int N, total = 0, avg;
  cin >> N;

  vector<int> A(N);
  for (int i = 0; i < N; i++) {
    cin >> A[i];
    total += A[i];
  }

  avg = total / N;

  for (int i = 0; i < N; i++) {
    cout << abs(A[i] - avg) << endl;
  }
}
