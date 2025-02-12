(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(1019)}])},1019:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>j});var a=o(4848),n=o(7665),l=o(5072),r=o(2309),s=o(4335);let i="https://jsonplaceholder.typicode.com/todos",d=async()=>{await new Promise(e=>setTimeout(e,1e3));let e=await s.A.get("".concat(i,"?_limit=10"));return[...JSON.parse(localStorage.getItem("todos")||"[]"),...e.data]},c=async e=>{let t={...(await s.A.post(i,{title:e,completed:!1})).data,id:Date.now()},o=[...JSON.parse(localStorage.getItem("todos")||"[]"),t];return localStorage.setItem("todos",JSON.stringify(o)),t},u=async e=>{await s.A.delete("".concat(i,"/").concat(e));let t=JSON.parse(localStorage.getItem("todos")||"[]").filter(t=>t.id!==e);return localStorage.setItem("todos",JSON.stringify(t)),e},m=async(e,t,o)=>{let a=await s.A.put("".concat(i,"/",1),{title:t}),n=JSON.parse(localStorage.getItem("todos")||"[]").map(a=>a.id===e?{...a,title:t,completed:o}:a);return localStorage.setItem("todos",JSON.stringify(n)),{...a.data,title:t,completed:o}};var g=o(6812),p=o(6540);let x=e=>{let{todo:t,removeTodo:o,editTodo:n,currentTodoRef:l}=e,[r,s]=(0,p.useState)(!1),[i,d]=(0,p.useState)(t.title),[c,u]=(0,p.useState)(t.completed);return(0,p.useEffect)(()=>{r&&setTimeout(()=>{var e;null===(e=l.current)||void 0===e||e.focus()},0)},[r,l]),(0,a.jsxs)(g.P.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},exit:{opacity:0,x:50,transition:{duration:.3}},layout:!0,className:"flex items-center justify-between bg-white shadow-md p-4 rounded-lg border border-gray-200",children:[r?(0,a.jsx)("input",{value:i,onChange:e=>{d(e.target.value)},onBlur:e=>{e.stopPropagation(),n.mutate({id:t.id,title:i,completed:c}),s(!1)},ref:l,className:"text-lg"}):(0,a.jsx)("p",{className:"text-lg ".concat(t.completed?"line-through text-gray-500":"text-black"),children:t.title}),(0,a.jsxs)("div",{className:"flex gap-2",children:[r&&(0,a.jsx)("button",{onMouseDown:()=>{u(!c)},className:"px-4 py-2 ".concat(t.completed?"bg-red-500 hover:bg-red-600":"bg-green-500 hover:bg-green-600"," transition text-white rounded-lg"),children:t.completed?"Uncomplete":"Complete"}),(0,a.jsx)("button",{onMouseDown:()=>{if(!r){var e;s(!0),null===(e=l.current)||void 0===e||e.focus();return}n.mutate({id:t.id,title:i,completed:c}),s(!1)},className:"px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition",children:r?"Save":"Edit"}),(0,a.jsx)("button",{onClick:()=>{o.mutate(t.id)},className:"px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition",children:"Delete"})]})]})};var h=o(9965),f=o.n(h),v=o(6297);let y=e=>{let{todos:t,removeTodo:o,isPending:n,editTodo:l,currentTodoRef:r}=e;return(0,a.jsx)(v.N,{mode:"popLayout",children:(0,a.jsx)("div",{className:"space-y-2",children:n?(0,a.jsx)(f(),{src:"loading.svg",alt:"loading",width:50,height:50,className:"mx-auto pt-20"}):t.map(e=>(0,a.jsx)(x,{todo:e,removeTodo:o,editTodo:l,currentTodoRef:r},e.id))})})},b=e=>{let{message:t}=e;return(0,a.jsx)("div",{className:"w-full h-full flex items-center justify-center bg-red-500 rounded-xl",children:t})};var w=function(e){return e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed",e}({});let N=()=>{let[e,t]=(0,p.useState)(""),[o,s]=(0,p.useState)(w.ALL),[i,g]=(0,p.useState)(""),x=(0,p.useRef)(null),h=e=>{t(e.target.value)},f=()=>{e.trim()&&(E.mutate(e),t(""))},v=(0,n.jE)(),{data:N,isPending:j,isError:S,error:C}=(0,l.I)({queryKey:["todos"],queryFn:d}),E=(0,r.n)({mutationFn:c,onMutate:async e=>{await v.cancelQueries({queryKey:["todos"]});let t={id:Date.now(),title:e,completed:!1,userId:Date.now()+1};v.setQueryData(["todos"],function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[t,...e]})}}),T=(0,r.n)({mutationFn:u,onMutate:async e=>{await v.cancelQueries({queryKey:["todos"]}),v.setQueryData(["todos"],function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t.filter(t=>t.id!==e)})}}),D=(0,r.n)({mutationFn:e=>{let{id:t,title:o,completed:a}=e;return m(t,o,a)},onMutate:async e=>{let{id:t,title:o,completed:a}=e;await v.cancelQueries({queryKey:["todos"]}),v.setQueryData(["todos"],function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(e=>e.id===t?{...e,title:o,completed:a}:e)})}}),A=null==N?void 0:N.filter(e=>{switch(o){case w.ALL:return!0;case w.ACTIVE:return!e.completed;case w.COMPLETED:return e.completed;default:return!0}}).filter(e=>e.title.toLowerCase().includes(i.toLowerCase())),L=[{value:w.ALL,title:"All"},{value:w.ACTIVE,title:"Active"},{value:w.COMPLETED,title:"Completed"}];return(0,a.jsxs)("div",{className:"max-w-xl min-h-96 mx-auto p-4 bg-stone-50/20 rounded-2xl shadow-lg",children:[(0,a.jsx)("h1",{className:"text-3xl font-semibold text-center mb-4",children:"(˵ ͡~ ͜ʖ ͡\xb0˵)ﾉ⌒♡ TODO APP"}),(0,a.jsxs)("div",{className:"flex gap-2 mb-4",children:[(0,a.jsx)("input",{type:"text",placeholder:"Whatcha Gonna Do?",value:e,onChange:e=>h(e),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),f())},className:"w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"}),(0,a.jsx)("button",{onClick:f,className:"\n            ".concat(e.trim()?"bg-green-500 hover:bg-green-500/80":"bg-gray-200 cursor-not-allowed"," \n           text-white px-4 py-2 rounded-lg transition uppercase font-bold\n"),children:"just do it!"})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-xl mb-3",children:[(0,a.jsx)("p",{className:"font-semibold",children:"Filters:"}),L.map(e=>(0,a.jsx)("button",{onClick:()=>s(e.value),className:"px-4 py-2 rounded-lg font-semibold text-white transition-all shadow-md hover:shadow-lg\n             ".concat(o===e.value?"bg-sky-500 hover:bg-sky-600":"bg-stone-500 hover:bg-stone-600","\n           "),children:e.title},e.title))]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 text-xl mb-3",children:[(0,a.jsx)("p",{className:"font-semibold",children:"Search:"}),(0,a.jsx)("input",{value:i,onChange:e=>{g(e.target.value)},className:"w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"})]}),S?(0,a.jsx)(b,{message:null==C?void 0:C.message}):(0,a.jsx)(y,{todos:null!=A?A:[],isPending:j,removeTodo:T,editTodo:D,currentTodoRef:x})]})};function j(){return(0,a.jsx)("div",{className:"p-7",children:(0,a.jsx)(N,{})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[979,636,593,792],()=>t(2022)),_N_E=e.O()}]);