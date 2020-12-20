goog.provide('clojure.test.check.random.longs.bit_count_impl');
clojure.test.check.random.longs.bit_count_impl.lookup = (function (){var arr = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(arr[(0)] = (0));

var n__4613__auto___5899 = (256);
var i_5901 = (0);
while(true){
if((i_5901 < n__4613__auto___5899)){
(arr[i_5901] = ((arr[(i_5901 >> (1))]) + (i_5901 & (1))));

var G__5906 = (i_5901 + (1));
i_5901 = G__5906;
continue;
} else {
}
break;
}

return arr;
})();
/**
 * Returns a JS number (not a Long), the number of set bits in the
 *   given Long.
 */
clojure.test.check.random.longs.bit_count_impl.bit_count = (function clojure$test$check$random$longs$bit_count_impl$bit_count(x){
var low = x.low_;
var high = x.high_;
return ((((((((clojure.test.check.random.longs.bit_count_impl.lookup[(low & (255))]) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (8)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (16)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((low >> (24)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[(high & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (8)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (16)) & (255))])) + (clojure.test.check.random.longs.bit_count_impl.lookup[((high >> (24)) & (255))]));
});

//# sourceMappingURL=clojure.test.check.random.longs.bit_count_impl.js.map
