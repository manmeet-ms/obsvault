# 96
import asyncio
import time


async def func1(sec):
    print(f"Function started.")
    time.sleep(sec)
    print(f"Worked for {sec}s.")


async def func2(sec):
    print(f"Function started.")
    time.sleep(sec)
    print(f"Worked for {sec}s.")


async def func3(sec):
    print(f"Function started.")
    time.sleep(sec)
    print(f"Worked for {sec}s.")


async def main():
    await func1(1 * 1.5)
    await func2(2 * 1.5)
    await func3(3 * 1.5)

main()