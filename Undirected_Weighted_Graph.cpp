//Undirected Weighted Graph 

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
    vector<pair<int,int>>adList[v];

    int f,t,w;

    for(int i=0;i<e;i++){
        cout<<"From : ";
        cin>>f;

        cout<<"To : ";
        cin>>t;

        cout<<"Weight : ";
        cin>>w;

        adList[f].push_back(make_pair(t,w));
        adList[t].push_back(make_pair(f,w));
    }
    
    cout<<"\nOutput : "<<endl;
    for(int i=0;i<v;i++){
        cout<<i<<"->";
        for(int j=0;j<adList[i].size();j++){
            cout<<adList[i][j].first<<"=>"<<adList[i][j].second<<"  ";
        }
        cout<<endl;
    }
    return 0;
}