#include <bits/stdc++.h>
using namespace std;

int main() {
  int A, B, C, low, high;
  cin >> A >> B >> C;

  low = min(A, B);
  low = min(low, C);

  high = max(A, B);
  high = max(high, C);

  cout << high - low << endl;
}
