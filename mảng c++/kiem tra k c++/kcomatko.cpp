#include <iostream>
using namespace std;
int main() {
    int n;
    cout<<"Moi ban nhap so gia tri mang : ";
    cin>>n;
    int M[n];
    cout<<"\nMoi ban nhap phan tu trong mang: \n";
    for(int i=0;i<n;i++){
        cout<<"["<<i<<"]=";
        cin>>M[i];
    }
    cout<<"\nMang sau khi nhap:\n";
    for(int i=0;i<n;i++){
        cout<<M[i]<<"\t";
    }
    int k;
    cout<<"Nhap k muon tim:";
    cin>>k;
     bool kq=false;
    for(int i=0;i<n;i++){
        if(M[i]==k)
        {
            kq=true;
            break;
        }
    }
    if(kq==true){
        cout<<"thay"<<k<<" trong mang  ";
    }else {
        cout<<"ko tim thay" <<k<<" trong mang";
    }
    return 0;
}