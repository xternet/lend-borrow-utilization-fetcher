import matplotlib
matplotlib.use('TkAgg')  # Use TkAgg for interactive plots
import pandas as pd
import matplotlib.pyplot as plt
import os
from datetime import datetime

# Auto-detect the base directory for the project
script_dir = os.path.dirname(os.path.abspath(__file__))  # Get current script directory
project_root = os.path.abspath(os.path.join(script_dir, '..'))  # Move one level up to project root
base_dir = os.path.join(project_root, 'data/utilization-rates')  # Use project root as base_dir

# Mapping for protocol selection, matching your directory structure
protocol_mapping = {
    1: 'aave2',
    2: 'aaveV3',
    3: 'compoundV2',
    4: 'compoundV3'
}

# Ask user to select the protocol
print("Select the protocol by number:")
for num, protocol in protocol_mapping.items():
    print(f"{num}: {protocol}")
protocol_choice = int(input("Enter the number corresponding to the protocol: ").strip())

# Get the protocol name based on user input
selected_protocol = protocol_mapping.get(protocol_choice)
if not selected_protocol:
    print("Invalid selection for protocol.")
    exit()

# List available chains based on directory names in the selected protocol folder
protocol_dir = os.path.join(base_dir, selected_protocol)
if not os.path.exists(protocol_dir):
    print(f"No data found for {selected_protocol}.")
    print(f"Checked path: {protocol_dir}")  # Debugging print to see the path being checked
    exit()

available_chains = [name for name in os.listdir(protocol_dir) if os.path.isdir(os.path.join(protocol_dir, name))]

# Ask user to select the chain
print("\nSelect the chain by number:")
for idx, chain in enumerate(available_chains, start=1):
    print(f"{idx}: {chain}")
chain_choice = int(input("Enter the number corresponding to the chain: ").strip())

# Get the chain name based on user input
if chain_choice < 1 or chain_choice > len(available_chains):
    print("Invalid selection for chain.")
    exit()
selected_chain = available_chains[chain_choice - 1]

# List available tokens based on CSV files in the selected chain folder
chain_dir = os.path.join(protocol_dir, selected_chain)

# Correct token extraction by directly using the token name from the file name
available_tokens = [filename.replace('.csv', '') for filename in os.listdir(chain_dir) if filename.endswith('.csv')]

# Ask user to select multiple tokens (or all tokens)
print("\nSelect the tokens by number (e.g., 1,2,3) or type 'all' to select all tokens. Use comma ',' to separate token numbers.")
for idx, token in enumerate(available_tokens, start=1):
    print(f"{idx}: {token}")
token_choices = input("Enter the numbers corresponding to the tokens (or 'all' for all tokens): ").strip()

# Get the token names based on user input
if token_choices.lower() == 'all':
    selected_tokens = available_tokens
else:
    try:
        token_indices = [int(i.strip()) for i in token_choices.split(',')]
        selected_tokens = [available_tokens[i - 1] for i in token_indices if i > 0 and i <= len(available_tokens)]
    except ValueError:
        print("Invalid input. Please use numbers separated by commas.")
        exit()

# Initialize the plot
plt.figure(figsize=(10, 6))

# Loop through selected tokens and plot each one
for token in selected_tokens:
    # Path to the selected CSV file (use the full token name from available_tokens, don't re-add protocol and chain)
    csv_file = os.path.join(chain_dir, f"{token}.csv")

    # Check if the file exists
    if not os.path.exists(csv_file):
        print(f"CSV file not found: {csv_file}")
        continue

    # Read the CSV file
    df = pd.read_csv(csv_file)

    # Convert 'timestamp' column from Unix time to datetime
    df['timestamp'] = pd.to_datetime(df['timestamp'], unit='s')

    # Plot the data for each selected token
    plt.plot(df['timestamp'], df['utilizationRate'], label=f'Utilization Rate ({token})')

# Adding labels and title
plt.xlabel('Timestamp')
plt.ylabel('Utilization Rate')
plt.title(f'Utilization Rate Chart for Selected Tokens ({selected_protocol}-{selected_chain})')
plt.legend()

# Rotate x-axis labels for better readability
plt.xticks(rotation=45)

# Ask user whether to print the chart or save it
print("\nDo you want to print the chart or save it?")
print("1: Print")
print("2: Save")
save_or_print = int(input("Enter the number (1 for print, 2 for save): ").strip())

if save_or_print == 2:
    # Create directory for charts if it doesn't exist
    charts_dir = os.path.abspath(os.path.join(project_root, 'data/charts'))
    if not os.path.exists(charts_dir):
        os.makedirs(charts_dir)

    # Save the chart as an image file
    output_file = os.path.join(charts_dir, f"{selected_protocol}-{selected_chain}-chart.png")
    plt.tight_layout()
    plt.savefig(output_file)
    print(f"Chart saved as {output_file}")
else:
    # Show the chart interactively
    plt.tight_layout()
    plt.show()
