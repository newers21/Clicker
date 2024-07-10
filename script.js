let counter = 0;
let clickValue = 1;
let clickUpgradeLevel = 1;
let clickUpgradeCost = 500;

document.getElementById('coin').addEventListener('click', function () {
    incrementCounter();
});

function switchTab(tabName) {
    // �������� ��� �������
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));

    // ���������� �������� �������
    document.getElementById(`${tabName}Tab`).classList.add('active');

    // �������� ��� ����������
    document.getElementById('clickContainer').classList.add('hidden');
    document.getElementById('boostContainer').classList.add('hidden');
    // �������� ������� ��� ������ �����������, ���� ��� ����

    // ���������� ��������������� ���������
    if (tabName === 'click') {
        document.getElementById('clickContainer').classList.remove('hidden');
    } else if (tabName === 'boost') {
        document.getElementById('boostContainer').classList.remove('hidden');
    }
}

function incrementCounter() {
    counter += clickValue;
    document.getElementById('counter').innerText = counter;
}

function upgradeClick() {
    if (counter >= clickUpgradeCost && clickUpgradeLevel < 15) {
        counter -= clickUpgradeCost;
        clickUpgradeLevel++;
        clickValue++;
        clickUpgradeCost *= 2; // ���������� ��������� ��������
        document.getElementById('counter').innerText = counter;
        document.getElementById('boostCost').innerText = clickUpgradeCost;
        document.getElementById('boostLevel').innerText = clickUpgradeLevel;
    }
}
