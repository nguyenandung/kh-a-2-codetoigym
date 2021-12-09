#include <iostream>
using namespace std;
#define N 5
int main(){
    int M[N];
    cout<<"Nhap gia tri mang:\n";
    for(int i=0;i<N;i++){
        cout<<"M["<<i<<"]=";
        cin>>M[i];
    }
    cout<<"\nMang sau khi nhap la:\n";
    for(int i=0;i<N;i++){
        cout<<M[i]<<"\t";
    }
    cout<<"\nMang sau khi nhap dao nguoc la: \n";
    for(int i=N-1;i>=0;i--){
        cout<<M[i]<<"\t";
    }
    return 0;
}
