//Undirected Unweighted Graph 

#include<iostream>
#include<vector>

using namespace std;

int main(){
    int v,e;

    cout<<"Enter Number of Vertex : ";
    cin>>v;

    cout<<"Enter Number of Edges : ";
    cin>>e;

    //Adjacency List
    vector<int>adList[v];

    int f,t;

    for(int i=0;i<e;i++){
        cout<<"From : ";
        cin>>f;
        cout<<"To : ";
        cin>>t;
        adList[f].push_back(t);
        adList[t].push_back(f);
    }
    
    cout<<"\nOutput : "<<endl;
    for(int i=0;i<v;i++){
        cout<<i<<"->";
        for(int j=0;j<adList[i].size();j++){
            cout<<adList[i][j]<<" ";
        }
        cout<<endl;
    }
    return 0;
}