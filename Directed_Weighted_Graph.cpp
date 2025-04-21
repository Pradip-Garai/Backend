// Implement Directed Weighted Graph 

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
    vector<pair<int,int>>adjList[e];
    int f,t,w;

    // create graph

    for(int i=0;i<e;i++){
        cout<<"From : ";
        cin>>f;

        cout<<"To : ";
        cin>>t;

        cout<<"Weight : ";
        cin>>w;

        adjList[f].push_back(make_pair(t,w));
    }

    //output 
    cout<<"\nOutput : "<<endl;

    for(int i=0;i<v;i++){
        cout<<i<<"-->";
        for(int j=0;j<adjList[i].size();j++){
            cout<<adjList[i][j].first<<"=>"<<adjList[i][j].second<<"  ";
        }
        cout<<endl;
    }

    return 0;
}