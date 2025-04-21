// Implement Directed Unweighted Graph 

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
  vector<int>adjList[e];

  int f,t;

  for(int i=0;i<e;i++){
    cout<<"From : ";
    cin>>f;

    cout<<"To : ";
    cin>>t;

    adjList[f].push_back(t);
  }


  //output
  cout<<"\nOutput : "<<endl;
  for(int i=0;i<v;i++){
    cout<<i<<"--> ";
    for(int j=0;j<adjList[i].size();j++){
        cout<<adjList[i][j]<<" ";
    }
    cout<<endl;
  }
  return 0;
}