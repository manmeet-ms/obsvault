def decorator_function(fx_arg):
    def mod():
        print("Yeah! Decoration Before")
        fx_arg()
        print("Bye, Decoration after function ran")

    return mod


print("\nPutting `@` operator")


@decorator_function
def demo():
    print("Demo for decor. Hello World")


demo()

print("\nAn alternative way of putting decorators")


def demo():
    print("Hello World")


decorator_function(demo)()  # Calling function with decorator attached


def decorator_with_args(fx_args):
    def modifier(*args, **kwargs):
        print("Yeah! Decoration Before")
        fx_args(*args, **kwargs)
        print("Bye, Decoration after function ran")

    return modifier


@decorator_with_args
def add(m, n):
    print(m + n)


add(2, 3)

decorator_with_args(add)(2, 5)
