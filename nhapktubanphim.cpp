#include <iostream>
using namespace std;
int main() {
    int n;
    cout<<"Nhap so phan tu trong mang";
    cin>>n;
    int M[n];
    cout<<"moi ban nhap vao ca gia tri cho phan tu:\n";
    for(int i=0;i<n;i++) {
        cout<<"["<<i<<"]=";
        cin>>M[i];
    }
    cout<<"\n Mang sau khi ban nhap:\n";
    for(int i=0;i<n;i++)
    {
        cout<<M[i]<<"\t";
    }
    int k;
    cout<<"moi ban nhap k :";
    cin>>k;
    bool kq = false;
    int dem = 0;
    for(int i=0;i<n;i++) {
        if(k==M[i]){
            kq= true;
            //break;
            dem++;
        }
    }
    if(kq==true){
        cout<<"thay "<<k<<" xuat hien "<<dem<<"trong mang" ;
    }else {
        cout << "ko thay "<<k<<" xuan  trong mang";
    }
    return 0;
}