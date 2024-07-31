import matplotlib.pyplot as plt

# Sample data
x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

# Create a line plot
# plt.plot(x, y)

# Add labels and title
# plt.xlabel('X-axis')
# plt.ylabel('Y-axis')
# plt.title('Simple Line Plot')

# plt.show() # Show the plot

# plt.scatter(x, y, color='red', marker='o')
# plt.xlabel('X-axis')
# plt.ylabel('Y-axis')
# plt.title('Scatter Plot')
# plt.show()

plt.bar(x, y, color='#ff0000')
plt.xlabel('X-axis')
plt.ylabel('Y-axis')
plt.title('Bar Chart')
plt.show()

# Creating subplots
fig, axs = plt.subplots(2, 2)

# Subplot 1
axs[0, 0].plot(x, y)
axs[0, 0].set_title('Subplot 1')

# Subplot 2
axs[0, 1].scatter(x, y, color='red', marker='o')
axs[0, 1].set_title('Subplot 2')

# Subplot 3
axs[1, 0].bar(x, y, color='green')
axs[1, 0].set_title('Subplot 3')
