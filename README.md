# Kafka 실시간 버스 위치 시각화 미니 프로젝트



### 미니프로젝트에 대해

버스 위치의 위도, 경도 데이터를 임의로 생성하여 (Producer) 카프가 브로커측으로 넘기고 이를 Flask에서 받아내어 (Consumer) leaflet으로 간단하게 시각화해보는 미니프로젝트입니다.



### 미니프로젝트를 하게된 동기

최근에 제가 kafka에 대해서 굉장히 흥미를 느끼고 관련 공부를 하고 있는 중입니다. 메시징 시스템인 카프카만의 특징을 습득하며 직접 한번 써보고 싶었습니다. 카프카 클러스터를 구축하는 것은 aws에서 많이 해보았는데, 실제 데이터를 어떻게 브로커에게 넘겨주고 consumer가 어떻게 받아오는지, 추상적인 생각만 할 수 있었기 때문입니다. 아직은 카프카에 대해서 익숙치 않으므로, 미니프로젝트로 흥미를 더 높여보자는 취지에서 시작하게 되었습니다.



### 개발환경

* linux (MacOS)
* 클러스터를 구축하지는 않았습니다. 즉, zookeeper, kafka 모두 한 대씩 로컬에 구축하였습니다.
* 아직 Java가 익숙치 않아서, Application은 Python으로 개발하였습니다.



### 미니프로젝트에서 맡은 부분

* 카프카 서버 구축
* producer 및 consumer의 Python Application 제작
* Leaflet 시각화



### 얻은 것

* 카프카가 어떻게 돌아가는지 매우 직관적으로 확인할 수 있었습니다.
* 카프카에 대한 흥미가 매우 높아졌습니다 ! 추후에는 다른 테크와 연결해서 프로젝트를 진행해볼 예정입니다. (Spark-Kafka, Tableau-Kafka 등등...)



### 미니프로젝트에 대한 자세한 소개 링크

[여기](https://github.com/bohyunshin/Kafka_bus_project/blob/master/ref/kafka%20및%20leaflet을%20활용한%20실시간%20시각화.pdf) 를 클릭해주세요.



### 시연 영상에 대한 링크

[여기](https://www.youtube.com/watch?v=W9j2dYmFsHw&feature=youtu.be)를 클릭해주세요. 