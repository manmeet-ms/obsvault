# 78
class ParentClass:
    pass


class ChildClass(ParentClass):
    pass


class Car:
    def start(self):
        print("*Chassis shakes... and Started!")

class Mercedes(Car):
    def start(self):
        print("Engine Throttle...\nNitro Fired! Vroom Vroom!!!")


swift = Car()
swift.start()
print()
biome = Mercedes()
biome.start()
