# 92
import functools
import time


@functools.lru_cache(None)
def compute(arg):
    time.sleep(4)
    return 2*arg/5

init = time.time()
print(f"Value({10}): {compute(10)} >> Time taken >> {time.time()-init}s")
print(f"Value({5}): {compute(5)} >> Time taken >> {time.time()-init}s")
print(f"Value({60}): {compute(60)} >> Time taken >> {time.time()-init}s")

print(f"Value({10}): {compute(10)} >> Time taken >> {time.time()-init}s")
print(f"Value({4}): {compute(4)} >> Time taken >> {time.time()-init}s")
print(f"Value({5}): {compute(5)} >> Time taken >> {time.time()-init}s")
