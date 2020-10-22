# ON-SOPT-SERVER-SEMINAR

---

## SOPT 과제 올리는 곳 🥇

# 2주차 세미나 과제 진행 중

1. [NodeJS란 무엇인가](#nodejs-is) (작성자: 김민지)
2. [NodeJS의 장단점](#characteristics) (작성자: 신연상)   
3. [NodeJS와 다른 프레임워크 비교](#another) (작성자: 강준우)
4. [NodeJS 모듈](#module) (작성자: 김지현)
5. [NodeJS 엔진](#engine) (작성자: 박상수)
6. [NodeJS 사용시 주의사항](#notice) (작성자: 한수아) 



## 1. NodeJS란 <a name="nodejs-is"></a>

## 2. NodeJS의 장단점 <a name="characteristics"></a>

## 3. NodeJS와 다른 프레임워크 비교 <a name="another"></a>

## 4. NodeJS 모듈 <a name="module"></a>

## 5. NodeJS 엔진 <a name="engine"></a>

### V8의 특징

V8 엔진은 C++로 작성 되었으며, ECMA-262에 기재된 ECMAScript 및 WebAssembly를 처리할 수 있다.

V8은 IA-32, ARM, MIPS 프로세서를 사용하는 Windows 7 이상, macOS 10.12 이상, Linux x64 환경에서 실행이 가능하다.

V8은 Chrome이 아니더라도, 독립적으로 실행이 가능한데, 대표적인 예가 V8으로 빌드된 Node.js가 있다.

V8은 아래 특징을 지닌다.

- JavaScript 소스 코드를 컴파일 하고, 실행한다.
- 생성하는 Object를 메모리에 할당한다.
- 가비지 콜렉션을 이용해 더 이상 사용되지 않는 Object의 메모리를 해제한다.
- Hidden Class를 이용해 빠르게 프로퍼티에 접근한다.
- TurboFan을 이용해 최적화된 코드로 만들어 속도 및 메모리를 최적화한다.

--- 

### JIT Compiler

Javascript는 보통 js 파일 (text)로 배포되고, 이를 브라우저에서 사용한다. 

브라우저에서는 Javascript를 처리하기 위해서, Javascript 엔진으로 Javascript 소스를 내부에서 이해할 수 있는 언어로 변환하고 실행하는데, 이를 컴파일이라고 부른다. 

브라우저에서 Javascript의 컴파일은 보통 Interpreter로 처리된다고 알려져 있지만, V8엔진에서는 꼭 그렇지도 않다.

브라우저는 Javascript를 매번 브라우저가 이해할 수 있는 언어로 변환해야하는데, interpreter의 경우 항상 같은 코드를 반복해서, Compile하고 실행한다. 웹의 특성상 새로고침이나 페이지 이동이 잦은데, 항상 같은 코드를 반복해서 Compile하는 경우가 많다. 

V8에서는 먼저 Javascript 코드를 Interpreter 방식으로 Compile 하고, 이를 **ByteCode**로 만들어낸다. 

그리고 Compile 속도를 높이기 위해, 이 ByteCode를 캐싱해두고, 자주 쓰이는 코드를 인라인 캐싱과 같은 **최적화** 기법으로 최적화한 후, 이후에 Compile할 시에 참조하여 속도를 높인다. 

이러한 방식을 **JIT (Just-In-Time) Compiler**이라고 하며, Interpreter의 느린 실행 속도를 개선할 수 있다.

---

### V8 컴파일 과정

Javascript도 사람이 읽을 수 있는 코드이기 때문에, 기계가 읽을 수 있도록 기계어로 Compile 해야 한다.

V8에서 Javascript 컴파일 과정은 다음과 같다.

1. **Blink**에서 <script> 태그를 만나면, Javascript **스트리밍**을 시작한다.
2. 스트리밍으로 전달 받은 UTF-16 문자열은 **Scanner**를 이용해 **Token** (let, for)을 생성한다.
3. 생성된 **Token**을 가지고, **Parser**가 **추상 구문 트리 (AST)**를 만든다.
4. 만들어진 **AST**는 **Ignition (Compiler)**에서 **Byte Code**로 컴파일한다. 
5. 컴파일된 **Byte Code**를 실행함으로써 원하는 Javascript 동작이 실행된다. 

이때 컴파일한 내용을 V8에서는 최적화를 진행한다.

- Byte Code를 실행하면서, Profiling을 통해 최적화 해야 하는 데이터를 수집한다.
- Profiling을 통해 찾은 데이터는 TurboFan을 통해 자주 사용되는 함수나 데이터를 기반으로 최적화를 진행하며, Optimized Machine Code를 생성한다.
- 이후 Optimized Machine Code를 실행하며, 메모리 사용량을 줄이고, 기계어에 최적화되어, 속도와 성능을 향상 시킨다.

위 과정을 영상을 통해 자세히 설명하고 있다. 

[[참고](https://youtu.be/r5OWCtuKiAk/)](https://youtu.be/r5OWCtuKiAk)

---

### V8 Scanner 와 Token

Javascript 파일은 Text로 이루어져 있으며, 이를 Network를 통해 다운받는다.

V8에서는 이 Text 정보를 Parsing 하기 전에, 일정한 형태의 UTF-16으로 변환하고, Scanner를 이용해 Token을 생성한다.

이 때 Token은 미리 정의한 항목과 개발자가 정의한 함수나 변수들이다. 

- Javascript에 미리 정의되어 있는 for, const, if, function 같은 키워드
- 공백 이나 탭
- 변수 나 함수 식별자

이때 모든 파일을 다운 받고 실행되는 것이 아니라, 스트리밍 중 도착하는 순서대로, 여러 chunk 관리되며, 30kB 이상이 되면, Script Stream Tread에서 Parsing을 싲가한다.

Scanner 단계에서 속도를 올리기 위해서는 소스 코드를 축소하고, 불필요한 공백이나 주석을 제거하고, 비 ASCII 식별자를 피하는 것이 좋다. 

---

### V8 Parser와 AST

Parser는 Token을 가지고, 컴파일러(Ignition)가 사용할 AST를 생성한다.

AST(Abstract Syntax Tree)는 코드를 구조화된 트리로 만들어, 컴파일에서 사용할 수 있게 도와준다.

AST란 소스코드를 트리로 만든 구조체이며, 보통 컴파일러에서 사용한다.

[추상 구문 트리](https://ko.wikipedia.org/wiki/%EC%B6%94%EC%83%81_%EA%B5%AC%EB%AC%B8_%ED%8A%B8%EB%A6%AC)

출처 : [V8 에서 Javascript 코드를 실행하는 방법 정리해보기](https://medium.com/@pks2974/v8-%EC%97%90%EC%84%9C-javascript-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%8B%A4%ED%96%89%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-%EC%A0%95%EB%A6%AC%ED%95%B4%EB%B3%B4%EA%B8%B0-25837f61f551)

---


## 6. NodeJS 사용시 주의사항 <a name="notice"></a>





